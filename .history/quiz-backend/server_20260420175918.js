const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // ← EN PREMIER avant tout le reste

const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Quiz API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

/*
Étape 6 — Authentification complète 🔐

C'est quoi l'authentification ?
C'est le système register / login de ton app.
Register  →  créer un compte
Login     →  se connecter
Quand quelqu'un se connecte, le backend lui donne un token JWT — comme un badge. Il utilisera ce badge pour accéder aux pages protégées (son profil, ses résultats...).

Les fichiers qu'on va créer
quiz-backend/
├── controllers/
│   └── authController.js   ← la logique register/login
└── routes/
    └── authRoutes.js        ← les URLs /register et /login

1. Le Controller — controllers/authController.js
Le controller c'est le cerveau — il contient toute la logique.
La fonction generateToken
jsconst generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};
Elle prend l'id de l'utilisateur et crée un token JWT qui expire dans 7 jours.
id: "abc123"  →  token: "eyJhbGci...abc123xyz"

La fonction register
jsexports.register = async (req, res) => {
  const { name, email, password } = req.body;
On récupère name, email, password envoyés depuis le frontend.
js  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "Email déjà utilisé" });
On vérifie si l'email existe déjà en base de données. Si oui → on retourne une erreur.
js  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
On chiffre le mot de passe avant de le sauvegarder.
"123456"  →  "$2a$10$xK9z3Lm..."  (illisible)
genSalt(10) = niveau de complexité du chiffrement. Plus c'est élevé, plus c'est sécurisé mais lent. 10 est le standard.
js  const user = await User.create({ name, email, password: hashedPassword });
  res.status(201).json({ token: generateToken(user._id), name: user.name });
On sauvegarde l'utilisateur en DB et on retourne un token JWT + le nom.

La fonction login
jsexports.login = async (req, res) => {
  const { email, password } = req.body;
On récupère email et password.
js  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Utilisateur introuvable" });
On cherche l'utilisateur par email. S'il n'existe pas → erreur.
js  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect" });
On compare le mot de passe tapé avec celui chiffré en DB.
bcrypt.compare("123456", "$2a$10$xK9z3Lm...")  →  true ou false
js  res.json({ token: generateToken(user._id), name: user.name });
Si tout est bon → on retourne le token JWT.

2. Les Routes — routes/authRoutes.js
Les routes c'est les URLs que le frontend va appeler.
jsconst express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
Ça crée deux endpoints :
POST /api/auth/register  →  créer un compte
POST /api/auth/login     →  se connecter

3. Brancher les routes dans server.js
jsconst authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
Le /api/auth est le préfixe — toutes les routes auth commencent par ça :
/api/auth/register
/api/auth/login

Le flux complet visuellement
Register :
Frontend envoie  →  { name, email, password }
                         ↓
Backend vérifie  →  email déjà utilisé ?
                         ↓
Backend chiffre  →  password → hash
                         ↓
Backend sauvegarde → User en MongoDB
                         ↓
Backend retourne →  { token, name }
Login :
Frontend envoie  →  { email, password }
                         ↓
Backend cherche  →  user par email
                         ↓
Backend compare  →  password vs hash
                         ↓
Backend retourne →  { token, name }
Requête protégée (après login) :
Frontend envoie  →  requête + token dans le header
                         ↓
Backend vérifie  →  token valide ?
                         ↓
Backend retourne →  les données demandées ✅

Résumé simple
Fonction         Rôle
register         créer un compte + chiffrer password + retourner token
login            vérifier email/password + retourner token
generateToken    créer un badge JWT avec l'id de l'user
bcrypt.hashtransformer "123456" en charabia illisiblebcrypt.comparevérifier si le password tapé correspond au hashjwt.signcréer le tokenjwt.verifyvérifier que le token est valide (étape 7)
*/
