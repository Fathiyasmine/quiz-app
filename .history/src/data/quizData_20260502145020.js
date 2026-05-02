export const quizzes = [
  {
    id: 1,
    title: "UI UX Design",
    category: ["Computer", "Science", "Popular"],
    totalQuestion: 10,
    duration: 16, // minutes
    points: 100,
    rating: 4.8,
    image: "",
    description: "Brief explanation about this quiz",
    reward: 10,
    questions: [
      {
        question: "Que signifie UX ?",
        options: [
          "User Experience",
          "User Extension",
          "Ultra Experience",
          "User Extreme",
        ],
        correctAnswer: 0,
      },
      {
        question: "Quel outil est le plus utilisé pour le prototypage UI ?",
        options: ["Photoshop", "Figma", "Excel", "Visual Studio"],
        correctAnswer: 1,
      },
      {
        question: "Qu'est-ce qu'un wireframe ?",
        options: [
          "Un logo vectoriel",
          "Une maquette basse fidélité",
          "Un fichier CSS",
          "Un composant React",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Quel principe UX dit que les éléments similaires doivent être regroupés ?",
        options: ["Contraste", "Proximité", "Alignement", "Répétition"],
        correctAnswer: 1,
      },
      {
        question: "Qu'est-ce que le 'user flow' ?",
        options: [
          "La vitesse de chargement",
          "Le chemin qu'un utilisateur suit dans une app",
          "Le style visuel d'une interface",
          "La palette de couleurs",
        ],
        correctAnswer: 1,
      },
      {
        question: "Quel est le but principal d'un test d'utilisabilité ?",
        options: [
          "Tester le code",
          "Observer comment les utilisateurs interagissent avec le produit",
          "Vérifier les couleurs",
          "Optimiser le SEO",
        ],
        correctAnswer: 1,
      },
      {
        question: "Qu'est-ce que le 'responsive design' ?",
        options: [
          "Un design rapide",
          "Un design qui s'adapte à toutes les tailles d'écran",
          "Un design minimaliste",
          "Un design animé",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Quelle loi UX dit que plus une cible est grande et proche, plus elle est facile à atteindre ?",
        options: [
          "Loi de Hick",
          "Loi de Fitts",
          "Loi de Gestalt",
          "Loi de Miller",
        ],
        correctAnswer: 1,
      },
      {
        question: "Qu'est-ce qu'un 'persona' en UX ?",
        options: [
          "Un prototype interactif",
          "Un personnage fictif représentant l'utilisateur cible",
          "Un test A/B",
          "Un composant UI",
        ],
        correctAnswer: 1,
      },
      {
        question: "Quel format est recommandé pour les icônes UI ?",
        options: ["JPG", "PNG", "SVG", "GIF"],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: 2,
    title: "Graphic Design",
    category: ["Computer", "Popular", "Mathematic"],
    totalQuestion: 10,
    duration: 16,
    points: 100,
    rating: 4.8,
    image: "",
    questions: [
      {
        question:
          "Quels sont les 3 couleurs primaires en synthèse soustractive ?",
        options: [
          "Rouge, Vert, Bleu",
          "Cyan, Magenta, Jaune",
          "Rouge, Jaune, Bleu",
          "Noir, Blanc, Gris",
        ],
        correctAnswer: 1,
      },
      {
        question: "Que signifie CMJN ?",
        options: [
          "Cyan, Mauve, Jaune, Noir",
          "Cyan, Magenta, Jaune, Noir",
          "Crayon, Marker, Jaune, Net",
          "Couleur, Motif, Jaune, Nuance",
        ],
        correctAnswer: 1,
      },
      {
        question: "Quel format d'image supporte la transparence ?",
        options: ["JPG", "BMP", "PNG", "GIF uniquement"],
        correctAnswer: 2,
      },
      {
        question: "Qu'est-ce qu'une police Serif ?",
        options: [
          "Une police sans empattements",
          "Une police avec empattements",
          "Une police manuscrite",
          "Une police pixelisée",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Quel logiciel Adobe est dédié à l'illustration vectorielle ?",
        options: ["Photoshop", "Premiere", "Illustrator", "InDesign"],
        correctAnswer: 2,
      },
      {
        question: "Qu'est-ce que la règle des tiers ?",
        options: [
          "Utiliser 3 couleurs maximum",
          "Diviser l'image en 9 parties égales pour composer",
          "Utiliser 3 polices différentes",
          "Répéter un élément 3 fois",
        ],
        correctAnswer: 1,
      },
      {
        question: "Quel mode colorimétrique est utilisé pour l'impression ?",
        options: ["RGB", "HSL", "CMJN", "HEX"],
        correctAnswer: 2,
      },
      {
        question: "Qu'est-ce qu'un logotype ?",
        options: [
          "Un logo uniquement typographique",
          "Un logo avec une icône",
          "Un logo animé",
          "Un logo noir et blanc",
        ],
        correctAnswer: 0,
      },
      {
        question: "Qu'est-ce que le kerning ?",
        options: [
          "L'espacement entre les lignes",
          "L'espacement entre les lettres",
          "La taille de la police",
          "Le poids de la police",
        ],
        correctAnswer: 1,
      },
      {
        question: "Quel format est vectoriel ?",
        options: ["JPG", "PNG", "SVG", "BMP"],
        correctAnswer: 2,
      },
    ],
  },
  {
    title: "Mathematics",
    category: ["Mathematic"],
    questions: [
      {
        question: "Quel est le résultat de 15² ?",
        options: ["175", "225", "215", "205"],
        correctAnswer: 1,
      },
      {
        question: "Quelle est la valeur de π arrondie à 2 décimales ?",
        options: ["3.12", "3.16", "3.14", "3.18"],
        correctAnswer: 2,
      },
      {
        question: "Combien font 2³ × 2² ?",
        options: ["16", "32", "64", "8"],
        correctAnswer: 1,
      },
      {
        question: "Quelle est la racine carrée de 144 ?",
        options: ["11", "14", "12", "13"],
        correctAnswer: 2,
      },
      {
        question: "Quel est le PGCD de 48 et 36 ?",
        options: ["6", "12", "18", "24"],
        correctAnswer: 1,
      },
      {
        question: "Si x² - 9 = 0, quelles sont les solutions ?",
        options: ["x = 3", "x = ±3", "x = -3", "x = 9"],
        correctAnswer: 1,
      },
      {
        question: "Combien y a-t-il de degrés dans un triangle ?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: 1,
      },
      {
        question: "Quelle est la dérivée de f(x) = 3x² ?",
        options: ["3x", "6x", "6x²", "9x"],
        correctAnswer: 1,
      },
      {
        question: "Quel est le résultat de log₁₀(1000) ?",
        options: ["2", "3", "4", "10"],
        correctAnswer: 1,
      },
      {
        question:
          "Dans un repère, quelle est la distance entre (0,0) et (3,4) ?",
        options: ["5", "6", "7", "4"],
        correctAnswer: 0,
      },
    ],
  },
  {
    title: "Science",
    category: ["Science"],
    questions: [
      {
        question: "Quelle est la vitesse de la lumière ?",
        options: [
          "300 000 km/s",
          "150 000 km/s",
          "450 000 km/s",
          "200 000 km/s",
        ],
        correctAnswer: 0,
      },
      {
        question: "Quel est le symbole chimique de l'or ?",
        options: ["Or", "Go", "Au", "Ag"],
        correctAnswer: 2,
      },
      {
        question: "Combien de chromosomes a un être humain ?",
        options: ["23", "44", "46", "48"],
        correctAnswer: 2,
      },
      {
        question: "Quelle planète est la plus grande du système solaire ?",
        options: ["Saturne", "Neptune", "Jupiter", "Uranus"],
        correctAnswer: 2,
      },
      {
        question: "Quel organe produit l'insuline ?",
        options: ["Le foie", "Le pancréas", "Les reins", "La rate"],
        correctAnswer: 1,
      },
      {
        question: "Quelle est la formule chimique de l'eau ?",
        options: ["HO", "H²O", "H2O", "OH²"],
        correctAnswer: 2,
      },
      {
        question: "Qui a découvert la pénicilline ?",
        options: [
          "Louis Pasteur",
          "Marie Curie",
          "Alexander Fleming",
          "Isaac Newton",
        ],
        correctAnswer: 2,
      },
      {
        question: "Quelle force maintient les planètes en orbite ?",
        options: [
          "La force magnétique",
          "La gravité",
          "La force nucléaire",
          "L'électricité",
        ],
        correctAnswer: 1,
      },
      {
        question: "Combien de couches possède la Terre ?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
      },
      {
        question: "Quel gaz est le plus abondant dans l'atmosphère terrestre ?",
        options: ["Oxygène", "CO2", "Azote", "Argon"],
        correctAnswer: 2,
      },
    ],
  },
];
