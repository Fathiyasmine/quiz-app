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
*/
