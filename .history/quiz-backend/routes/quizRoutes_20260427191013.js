const express = require("express");
const router = express.Router();
const {
  getAllQuizzes,
  getQuizById,
  getQuizByLocalId,
} = require("../controllers/quizController");
const protect = require("../middleware/authMiddleware");
const Quiz = require("../models/Quiz"); // ← ajoute cette ligne

router.get("/", protect, getAllQuizzes);
router.get("/:id", protect, getQuizById);
router.get("/local/:id", getQuizByLocalId);

router.post("/", protect, async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

/*
Tester avec Postman 🧪

C'est quoi Postman ?
C'est un outil qui permet de tester ton backend sans avoir besoin du frontend.
Tu lui dis :

Quelle URL appeler
Quelle méthode (GET, POST...)
Quelles données envoyer

Et il te montre la réponse du backend.
Normalement :  Frontend  →  Backend
Avec Postman : Postman   →  Backend

1. Installer Postman
Va sur postman.com → télécharge et installe.

2. Créer une Collection
Une collection c'est un dossier qui regroupe tous tes tests.
1. Ouvre Postman
2. Clique "New" → "Collection"
3. Nomme la "Quiz App"

3. Tester Register
Crée une nouvelle requête :
1. Clic droit sur la collection → "Add Request"
2. Nomme la "Register"
Configure :
Méthode  →  POST
URL      →  http://localhost:5000/api/auth/register
Ajoute le Body :
1. Clique sur "Body"
2. Sélectionne "raw"
3. Choisis "JSON" dans le menu déroulant
4. Colle ça :
json{
  "name": "Yasmine",
  "email": "yasmine@gmail.com",
  "password": "123456"
}
Clique Send → tu dois recevoir :
json{
  "token": "eyJhbGci...abc123",
  "name": "Yasmine"
}
Copie le token — tu en auras besoin pour les routes protégées !

4. Tester Login
Crée une nouvelle requête :
Méthode  →  POST
URL      →  http://localhost:5000/api/auth/login
Body :
json{
  "email": "yasmine@gmail.com",
  "password": "123456"
}
Clique Send → tu dois recevoir :
json{
  "token": "eyJhbGci...abc123",
  "name": "Yasmine"
}

5. Tester les routes protégées
Pour les routes protégées, il faut envoyer le token dans le header.
Comment ajouter le token :
1. Crée une nouvelle requête
2. Clique sur "Authorization"
3. Dans "Auth Type" choisis "Bearer Token"
4. Colle ton token dans le champ "Token"
Bearer Token : eyJhbGci...abc123
Postman ajoutera automatiquement dans le header :
Authorization: Bearer eyJhbGci...abc123

6. Tester GET tous les quizzes
Méthode      →  GET
URL          →  http://localhost:5000/api/quizzes
Authorization →  Bearer Token → colle ton token
Clique Send → tu recevras la liste des quizzes (vide pour l'instant) :
json[]

7. Ajouter un Quiz manuellement
Pour tester, on va d'abord ajouter un quiz directement dans MongoDB.
Va sur MongoDB Atlas → Data Explorer → ta base quizdb → collection quizzes → Insert Document :
json{
  "title": "Quiz React",
  "category": "Frontend",
  "questions": [
    {
      "question": "C'est quoi React ?",
      "options": ["Un framework", "Une librairie", "Un langage", "Un outil"],
      "correctAnswer": 1
    },
    {
      "question": "C'est quoi JSX ?",
      "options": ["Java", "HTML dans JS", "CSS", "Une DB"],
      "correctAnswer": 1
    }
  ]
}
Relance le GET quizzes → tu verras le quiz 🎉

8. Tester GET un seul quiz
Méthode      →  GET
URL          →  http://localhost:5000/api/quizzes/ID_DU_QUIZ
Authorization →  Bearer Token
Remplace ID_DU_QUIZ par le vrai id que MongoDB a généré :
http://localhost:5000/api/quizzes/64abc123def456

9. Tester POST sauvegarder un résultat
Méthode      →  POST
URL          →  http://localhost:5000/api/results
Authorization →  Bearer Token
Body :
json{
  "quiz": "ID_DU_QUIZ",
  "score": 17,
  "total": 20,
  "timeTaken": 765
}
Tu dois recevoir :
json{
  "_id": "result_abc123",
  "user": "user_abc123",
  "quiz": "quiz_abc123",
  "score": 17,
  "total": 20,
  "timeTaken": 765
}

10. Tester GET mon historique
Méthode      →  GET
URL          →  http://localhost:5000/api/results/me
Authorization →  Bearer Token
Tu dois recevoir tous tes résultats :
json[
  {
    "quiz": { "title": "Quiz React" },
    "score": 17,
    "total": 20,
    "timeTaken": 765
  }
]

Les codes de réponse à connaître
200  →  OK, tout va bien
201  →  créé avec succès
400  →  erreur dans les données envoyées
401  →  non autorisé (token manquant ou invalide)
404  →  introuvable
500  →  erreur serveur

Résumé de tous les tests
1. POST /api/auth/register   →  créer un compte       🔓
2. POST /api/auth/login      →  se connecter          🔓
3. GET  /api/quizzes         →  tous les quizzes      🔒 token
4. GET  /api/quizzes/:id     →  un seul quiz          🔒 token
5. POST /api/results         →  sauvegarder résultat  🔒 token
6. GET  /api/results/me      →  mon historique        🔒 token

Ordre logique pour tester
Étape 1 → Register          (créer un compte)
Étape 2 → Login             (récupérer le token)
Étape 3 → Copier le token
Étape 4 → Tester les routes protégées avec ce token
*/
