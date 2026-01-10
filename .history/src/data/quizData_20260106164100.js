export const quizzes = [
  {
    id: 1,
    title: "UI UX Design",
    category: "Computer",
    questions: 10,
    duration: 75, // minutes
    points: 100,
    rating: 4.8,
    image: "/quiz-placeholder.jpg",
    description: "Brief explanation about this quiz",
    reward: 10,
    questions: [
      {
        id: 1,
        question: "What is the meaning of UI UX Design?",
        options: [
          "User Interface and User Experience",
          "User Introface and User Experience",
          "User Interface and Using Experience",
          "User Interface and User Experience",
          "Using Interface and Using Experience",
        ],
        correctAnswer: 0,
      },
      // Ajoutez 9 autres questions...
    ],
  },
  {
    id: 2,
    title: "Graphic Design",
    category: "Computer",
    questions: 10,
    duration: 75,
    points: 100,
    rating: 4.8,
    image: "/quiz-placeholder.jpg",
  },
];
