const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
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
*/
