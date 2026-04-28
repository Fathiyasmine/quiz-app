const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log("Token reçu:", token);
  if (!token) return res.status(401).json({ message: "Non autorisé" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch {
    res.status(401).json({ message: "Token invalide" });
  }
};

module.exports = protect;
/*

C'est quoi un Middleware ?
C'est un gardien qui se place entre la requête et la réponse.
Frontend envoie requête
        ↓
   MIDDLEWARE        ← vérifie le token
        ↓
   Controller        ← traite la requête
        ↓
Frontend reçoit réponse
Sans token valide → le middleware bloque tout, le controller n'est jamais atteint.

Le fichier — middleware/authMiddleware.js
jsconst jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
protect c'est le nom du gardien. next = "passe au controller suivant si tout est OK".
js  const token = req.headers.authorization?.split(" ")[1];
On récupère le token depuis le header de la requête.
Le frontend envoie le token comme ça :
Authorization: "Bearer eyJhbGci...abc123"
.split(" ")[1] découpe par l'espace et prend la 2ème partie :
"Bearer eyJhbGci...abc123"
         ↓ split(" ")
["Bearer", "eyJhbGci...abc123"]
                ↓ [1]
"eyJhbGci...abc123"   ← le vrai token
js  if (!token) return res.status(401).json({ message: "Non autorisé" });
Pas de token → accès refusé directement.
js  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
On vérifie le token avec la clé secrète du .env.
Si le token est valide → decoded contient les données :
jsdecoded = { id: "abc123", iat: 1234567, exp: 9876543 }
//          ↑ l'id de l'user qu'on avait mis dans le token
js    req.user = await User.findById(decoded.id).select("-password");
On cherche l'utilisateur en DB avec son id, et on l'attache à req.user.
.select("-password") = on exclut le mot de passe des données retournées.
js    next();
Tout est OK → on passe au controller.
js  } catch {
    res.status(401).json({ message: "Token invalide" });
  }
};

module.exports = protect;
Token falsifié ou expiré → accès refusé.

Le flux complet du Middleware :
Frontend envoie  →  requête + "Bearer eyJhbGci..."
                         ↓
protect vérifie  →  token présent ?
                         ↓ oui
protect vérifie  →  token valide ?
                         ↓ oui
protect attache  →  req.user = { id, name, email }
                         ↓
Controller reçoit →  req.user disponible ✅

---
1. req.headers.authorization
headers c'est une enveloppe qui accompagne chaque requête HTTP. Elle contient des infos supplémentaires comme le token.
Quand le frontend envoie une requête protégée, il met le token dans cette enveloppe :
headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGci...abc123"
}
req.headers.authorization récupère juste la valeur de Authorization :
"Bearer eyJhbGci...abc123"

2. Le ? dans authorization?
C'est l'opérateur optionnel — si authorization n'existe pas dans les headers, au lieu de crasher, il retourne undefined :
js// Sans ?  → crash si authorization n'existe pas
req.headers.authorization.split(" ")  // ❌ TypeError

// Avec ?  → retourne undefined proprement
req.headers.authorization?.split(" ") // ✅ undefined

3. .split(" ")[1]
authorization n'est pas une fonction qui vérifie — c'est juste une valeur texte. Le vrai token est caché dedans :
"Bearer eyJhbGci...abc123"
Bearer c'est juste un mot standard du protocole HTTP qui dit "ce qui suit est un token". C'est une convention, pas le nom de l'utilisateur.
.split(" ") découpe par l'espace :
"Bearer eyJhbGci...abc123"
           ↓ split(" ")
["Bearer", "eyJhbGci...abc123"]
    [0]          [1]
[1] prend la 2ème partie = le vrai token.

4. Pourquoi vérifier avec process.env.JWT_SECRET ?
Quand on crée le token à l'étape 6 :
jsjwt.sign({ id: user._id }, process.env.JWT_SECRET)
//                              ↑ clé secrète utilisée pour signer
Quand on vérifie le token à l'étape 7 :
jsjwt.verify(token, process.env.JWT_SECRET)
//                    ↑ même clé secrète pour vérifier
C'est comme un cadenas et sa clé :
jwt.sign   →  ferme le cadenas avec la clé secrète
jwt.verify →  essaie d'ouvrir avec la même clé

Bonne clé   →  ✅ token valide
Mauvaise clé →  ❌ token falsifié
Si quelqu'un essaie de créer un faux token sans connaître JWT_SECRET → jwt.verify détecte que c'est faux et refuse l'accès.
C'est pour ça que JWT_SECRET doit rester secret dans le .env et ne jamais être partagé.

5. Pourquoi .select("-password") ?
Quand on fait User.findById(decoded.id), MongoDB retourne tout l'utilisateur :
js{
  _id: "abc123",
  name: "Yasmine",
  email: "yasmine@gmail.com",
  password: "$2a$10$xK9z3Lm..."  ← on ne veut pas ça !
}
Le - devant password veut dire "exclus ce champ" :
js.select("-password")
// retourne :
{
  _id: "abc123",
  name: "Yasmine",
  email: "yasmine@gmail.com"
  // password absent ✅
}
Pourquoi ? Par sécurité — même chiffré, le mot de passe ne doit jamais circuler inutilement dans l'app. On en a besoin uniquement dans le login, nulle part ailleurs.

Résumé visuel complet
"Bearer eyJhbGci...abc123"
    ↓ .split(" ")[1]
"eyJhbGci...abc123"          ← le vrai token
    ↓ jwt.verify(token, JWT_SECRET)
{ id: "abc123" }             ← données décodées
    ↓ User.findById(id).select("-password")
{ name, email }              ← user sans password ✅
    ↓ req.user = user
Controller peut l'utiliser   ✅
-----------------------------------------
etape 8 plus simplifiée :
Étape 8 — Routes Quiz & Results 🎯

D'abord, c'est quoi cette étape ?
Rappelle toi ton app quiz — quand l'utilisateur :

Ouvre la liste des quizzes
Clique sur un quiz
Finit un quiz et voit son score
Regarde son historique

Tout ça, c'est le frontend qui demande des données au backend. L'étape 8 c'est le backend qui prépare ces réponses.

C'est quoi un Controller ?
C'est juste une fonction qui :

Reçoit une demande du frontend
Va chercher les données dans MongoDB
Retourne les données au frontend

Frontend demande  →  Controller cherche en DB  →  Frontend reçoit

C'est quoi une Route ?
C'est l'adresse URL que le frontend appelle.
Comme une adresse postale :
/api/quizzes        →  "donne moi tous les quizzes"
/api/quizzes/abc123 →  "donne moi le quiz numéro abc123"
/api/results        →  "sauvegarde mon résultat"
/api/results/me     →  "donne moi mon historique"

Fichier 1 — Le Controller des Quizzes
controllers/quizController.js
Fonction 1 : récupérer tous les quizzes
jsexports.getAllQuizzes = async (req, res) => {
  try {

    const quizzes = await Quiz.find()
    res.json(quizzes);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
Très simple :
Quiz.find()  →  va dans MongoDB  →  ramène tous les quizzes
res.json()   →  envoie au frontend
Mais il y a un problème — les bonnes réponses sont dans la DB ! Si on envoie tout, l'utilisateur peut tricher. Donc on les cache :
jsconst quizzes = await Quiz.find().select("-questions.correctAnswer")
//                                         ↑ cache les bonnes réponses
DB contient     →  { question, options, correctAnswer: 2 }
Frontend reçoit →  { question, options }  ← correctAnswer caché ✅

Fonction 2 : récupérer un seul quiz
jsexports.getQuizById = async (req, res) => {
  try {

    const quiz = await Quiz.findById(req.params.id).select("-questions.correctAnswer");

    if (!quiz) return res.status(404).json({ message: "Quiz introuvable" });

    res.json(quiz);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
req.params.id — c'est l'id qui vient de l'URL :
Frontend appelle  →  /api/quizzes/abc123
                                   ↑
                      req.params.id = "abc123"
On cherche ce quiz précis dans la DB. S'il n'existe pas → on retourne une erreur 404 (comme les pages "not found" sur internet).

Fichier 2 — Le Controller des Résultats
controllers/resultController.js
Fonction 1 : sauvegarder un résultat
jsexports.saveResult = async (req, res) => {

  const { quiz, score, total, timeTaken } = req.body;

  try {
    const result = await Result.create({
      user: req.user._id,
      quiz,
      score,
      total,
      timeTaken
    });

    res.status(201).json(result);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
Quand l'utilisateur finit un quiz, le frontend envoie :
jsreq.body = {
  quiz: "abc123",    ← id du quiz
  score: 17,         ← bonnes réponses
  total: 20,         ← total questions
  timeTaken: 765     ← secondes
}
req.user._id — c'est l'id de l'utilisateur connecté. On le récupère automatiquement depuis le middleware (étape 7), pas besoin que le frontend l'envoie :
Token  →  Middleware décode  →  req.user._id disponible ✅
On sauvegarde tout ça dans MongoDB.

Fonction 2 : récupérer mon historique
jsexports.getMyResults = async (req, res) => {
  try {

    const results = await Result.find({ user: req.user._id })
                                .populate("quiz", "title");

    res.json(results);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
Result.find({ user: req.user._id }) — cherche seulement les résultats de cet utilisateur :
DB contient résultats de Yasmine, Ahmed, Sara...
                ↓
On retourne seulement ceux de Yasmine ✅
.populate("quiz", "title") — c'est la partie la plus importante à comprendre.
Dans la DB, un résultat est sauvegardé comme ça :
js{
  user: "user_abc",
  quiz: "quiz_123",   ← juste un id, pas le vrai nom
  score: 17
}
Sans populate le frontend reçoit :
js{ quiz: "quiz_123", score: 17 }  ← inutile, on connait pas le nom
Avec .populate("quiz", "title") MongoDB va chercher automatiquement le quiz et retourne son titre :
js{ quiz: { title: "Quiz React" }, score: 17 }  ← utile ! ✅

Fichier 3 — Les Routes Quiz
routes/quizRoutes.js
jsconst express = require("express");
const router = express.Router();
const { getAllQuizzes, getQuizById } = require("../controllers/quizController");
const protect = require("../middleware/authMiddleware");

router.get("/", protect, getAllQuizzes);
router.get("/:id", protect, getQuizById);

module.exports = router;
Chaque ligne c'est une adresse + gardien + controller :
router.get("/", protect, getAllQuizzes)
         ↑        ↑           ↑
       URL    gardien JWT   fonction
Requête arrive  →  protect vérifie token  →  getAllQuizzes répond
protect est là pour dire : "cette route est protégée, faut être connecté".

Fichier 4 — Les Routes Results
routes/resultRoutes.js
jsconst express = require("express");
const router = express.Router();
const { saveResult, getMyResults } = require("../controllers/resultController");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, saveResult);
router.get("/me", protect, getMyResults);

module.exports = router;
POST vs GET :
GET   →  je veux recevoir des données
POST  →  je veux envoyer/sauvegarder des données
GET  /api/results/me  →  donne moi mon historique
POST /api/results     →  sauvegarde mon résultat

Brancher dans server.js
jsconst quizRoutes   = require("./routes/quizRoutes");
const resultRoutes = require("./routes/resultRoutes");

app.use("/api/quizzes", quizRoutes);
app.use("/api/results", resultRoutes);
Le préfixe /api/quizzes s'ajoute devant toutes les routes quiz :
router.get("/")    →  devient  /api/quizzes
router.get("/:id") →  devient  /api/quizzes/abc123

Vision complète de toutes les routes
🔓 LIBRE (pas besoin de token)
POST  /api/auth/register  →  créer un compte
POST  /api/auth/login     →  se connecter

🔒 PROTÉGÉ (token obligatoire)
GET   /api/quizzes        →  liste de tous les quizzes
GET   /api/quizzes/:id    →  un seul quiz
POST  /api/results        →  sauvegarder mon résultat
GET   /api/results/me     →  mon historique

Résumé ultra simple
quizController   →  cherche les quizzes en DB
resultController →  sauvegarde et récupère les résultats
quizRoutes       →  les adresses URL pour les quizzes
resultRoutes     →  les adresses URL pour les résultats
protect          →  le gardien qui vérifie le token partout
server.js        →  branche tout ensemble
*/
