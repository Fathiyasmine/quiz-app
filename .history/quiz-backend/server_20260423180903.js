/* global process */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";

dotenv.config(); // ← EN PREMIER avant tout le reste

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Quiz API is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/results", resultRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

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
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};
Elle prend l'id de l'utilisateur et crée un token JWT qui expire dans 7 jours.
id: "abc123"  →  token: "eyJhbGci...abc123xyz"

La fonction register
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
On récupère name, email, password envoyés depuis le frontend.
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: "Email déjà utilisé" });
On vérifie si l'email existe déjà en base de données. Si oui → on retourne une erreur.
 const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
On chiffre le mot de passe avant de le sauvegarder.
"123456"  →  "$2a$10$xK9z3Lm..."  (illisible)
genSalt(10) = niveau de complexité du chiffrement. Plus c'est élevé, plus c'est sécurisé mais lent. 10 est le standard.
 const user = await User.create({ name, email, password: hashedPassword });
  res.status(201).json({ token: generateToken(user._id), name: user.name });
On sauvegarde l'utilisateur en DB et on retourne un token JWT + le nom.

La fonction login
exports.login = async (req, res) => {
  const { email, password } = req.body;
On récupère email et password.
 const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Utilisateur introuvable" });
On cherche l'utilisateur par email. S'il n'existe pas → erreur.
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect" });
On compare le mot de passe tapé avec celui chiffré en DB.
bcrypt.compare("123456", "$2a$10$xK9z3Lm...")  →  true ou false
 res.json({ token: generateToken(user._id), name: user.name });
Si tout est bon → on retourne le token JWT.

2. Les Routes — routes/authRoutes.js
Les routes c'est les URLs que le frontend va appeler.
const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
Ça crée deux endpoints :
POST /api/auth/register  →  créer un compte
POST /api/auth/login     →  se connecter

3. Brancher les routes dans server.js
const authRoutes = require("./routes/authRoutes");
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
bcrypt.hash      transformer "123456" en charabia illisible
bcrypt.compare    vérifier si le password tapé correspond au hash
jwt.sign           créer le token
jwt.verify        vérifier que le token est valide (étape 7)
*/
/*
Plan général
Étape 1 — Initialiser le projet Node.js
Étape 2 — Installer les dépendances
Étape 3 — Créer le serveur Express
Étape 4 — Connecter MongoDB avec Mongoose
Étape 5 — Créer les Models (User, Quiz, Result)
Étape 6 — Créer les Routes & Controllers
Étape 7 — Authentification JWT (register/login)
Étape 8 — Routes protégées (middleware)
Étape 9 — Tester avec Postman
Étape 10 — Déployer sur Render.com

Étape 1 — Initialiser le projet
Crée un dossier pour ton backend et ouvre-le dans le terminal :
bashmkdir quiz-backend
cd quiz-backend
npm init -y
npm init -y crée automatiquement le fichier package.json sans questions.
Ensuite crée la structure de dossiers :
bashmkdir config controllers models routes middleware
touch server.js .env .gitignore
Tu dois avoir ceci :
quiz-backend/
├── config/
├── controllers/
├── models/
├── routes/
├── middleware/
├── server.js
├── .env
└── .gitignore
Dans .gitignore ajoute :
node_modules
.env

Dis moi quand c'est fait → on passe à Étape 2 : installer les dépendances 🚀Vous avez dit : je ccree le dossier backend hors le dossier du frontend?je ccree le dossier backend hors le dossier du frontend? genre ils seront separes? sinon donne moi tout les etapes nattend pas quand je finis , ensuite si je comprend pas qlq chose je te le dis19 avr.Claude a répondu : Oui, deux dossiers séparés — c'est la bonne pratique :Oui, deux dossiers séparés — c'est la bonne pratique :
quiz-project/
├── quiz-frontend/   (ton React existant)
└── quiz-backend/    (le nouveau)

Étape 1 — Initialiser le projet
bashmkdir quiz-backend
cd quiz-backend
npm init -y
Crée la structure :
bashmkdir config controllers models routes middleware
touch server.js .env .gitignore
Dans .gitignore :
node_modules
.env

Étape 2 — Installer les dépendances
bashnpm install express mongoose dotenv cors bcryptjs jsonwebtoken
npm install --save-dev nodemon
PackageRôleexpressle serveurmongooseconnecter MongoDBdotenvlire le .envcorsautoriser le frontend à parler au backendbcryptjschiffrer les mots de passejsonwebtokencréer les tokens JWTnodemonredémarre le serveur automatiquement
Dans package.json ajoute :
json"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

Étape 3 — Créer le serveur Express
Dans server.js :
jsconst express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Quiz API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
Test :
bashnpm run dev
Ouvre http://localhost:5000 → tu dois voir "Quiz API is running"

Étape 4 — Connecter MongoDB
Va sur mongodb.com → crée un compte → crée un cluster gratuit → copie ta connection string.
Dans .env :
MONGO_URI=mongodb+srv://tonuser:tonpassword@cluster.mongodb.net/quizdb
JWT_SECRET=unMotDePasseTresSecret123
PORT=5000
Crée config/db.js :
jsconst mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
Dans server.js ajoute :
jsconst connectDB = require("./config/db");
connectDB();

Étape 5 — Créer les Models
models/User.js
jsconst mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
models/Quiz.js
jsconst mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String },
  questions: [
    {
      question: { type: String, required: true },
      options: [String],
      correctAnswer: { type: Number, required: true }, // index de la bonne réponse
    }
  ],
}, { timestamps: true });

module.exports = mongoose.model("Quiz", quizSchema);
models/Result.js
jsconst mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  score: { type: Number, required: true },
  total: { type: Number, required: true },
  timeTaken: { type: Number }, // en secondes
}, { timestamps: true });

module.exports = mongoose.model("Result", resultSchema);

Étape 6 — Authentification (Register & Login)
controllers/authController.js
jsconst User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Générer un token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email déjà utilisé" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ token: generateToken(user._id), name: user.name });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Utilisateur introuvable" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Mot de passe incorrect" });

    res.json({ token: generateToken(user._id), name: user.name });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
routes/authRoutes.js
jsconst express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
Dans server.js ajoute :
jsconst authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

Étape 7 — Middleware JWT (routes protégées)
middleware/authMiddleware.js
jsconst jwt = require("jsonwebtoken");
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

Étape 8 — Routes Quiz & Results
controllers/quizController.js
jsconst Quiz = require("../models/Quiz");

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().select("-questions.correctAnswer");
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id).select("-questions.correctAnswer");
    if (!quiz) return res.status(404).json({ message: "Quiz introuvable" });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
controllers/resultController.js
jsconst Result = require("../models/Result");

exports.saveResult = async (req, res) => {
  const { quiz, score, total, timeTaken } = req.body;
  try {
    const result = await Result.create({ user: req.user._id, quiz, score, total, timeTaken });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyResults = async (req, res) => {
  try {
    const results = await Result.find({ user: req.user._id }).populate("quiz", "title");
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
routes/quizRoutes.js
jsconst express = require("express");
const router = express.Router();
const { getAllQuizzes, getQuizById } = require("../controllers/quizController");
const protect = require("../middleware/authMiddleware");

router.get("/", protect, getAllQuizzes);
router.get("/:id", protect, getQuizById);

module.exports = router;
routes/resultRoutes.js
jsconst express = require("express");
const router = express.Router();
const { saveResult, getMyResults } = require("../controllers/resultController");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, saveResult);
router.get("/me", protect, getMyResults);

module.exports = router;
Dans server.js ajoute :
jsconst quizRoutes = require("./routes/quizRoutes");
const resultRoutes = require("./routes/resultRoutes");

app.use("/api/quizzes", quizRoutes);
app.use("/api/results", resultRoutes);

Étape 9 — Tester avec Postman
Méthode          URL                         Body
POST            /api/auth/register          { name, email, password }
POST            /api/auth/login              { email, password }
GET             /api/quizzes                Header: Authorization: Bearer TOKEN 
POST            /api/results                 { quiz, score, total, timeTaken }
GET              /api/results/me              Header: Authorization: Bearer TOKEN
*/
