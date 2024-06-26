export interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
  uuid: string;
}

const mockQuestions: Question[] = [
  {
    uuid: "45d2488e-5b08-4bfc-a488-68e5b08bfc3a",
    question: "What is the capital of France?",
    answers: ["London", "Paris", "Berlin", "Rome"],
    correctAnswer: "Paris"
  },
  {
    uuid: "e6fe2a7c-6b97-4894-b2a7-c6b974894b3c",
    question: 'Who wrote "To Kill a Mockingbird"?',
    answers: ["Ernest Hemingway", "Harper Lee", "Mark Twain", "J.K. Rowling"],
    correctAnswer: "Harper Lee"
  },
  {
    uuid: "b89ad2bb-426f-4c5d-9ad2-bb426f4c5d5e",
    question: "Which planet is known as the Red Planet?",
    answers: ["Jupiter", "Mars", "Saturn", "Venus"],
    correctAnswer: "Mars"
  },
  {
    uuid: "08a8d44f-c529-47cc-88d4-4fc52977cc7a",
    question: "What is the chemical symbol for water?",
    answers: ["H2O", "CO2", "NaCl", "Fe2O3"],
    correctAnswer: "H2O"
  },
  {
    uuid: "e5d90c8d-3df0-4c91-b90c-8d3df07c9168",
    question: "What year did World War II end?",
    answers: ["1945", "1918", "1939", "1955"],
    correctAnswer: "1945"
  },
  {
    uuid: "d2290e71-cd43-4542-990e-71cd43a5429f",
    question: "Who painted the Mona Lisa?",
    answers: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Michelangelo"
    ],
    correctAnswer: "Leonardo da Vinci"
  },
  {
    uuid: "8fb2f6e4-0b05-4df4-b2f6-e40b058df48b",
    question: "What is the tallest mountain in the world?",
    answers: [
      "Mount Kilimanjaro",
      "Mount Everest",
      "Mount Fuji",
      "Mount McKinley"
    ],
    correctAnswer: "Mount Everest"
  },
  {
    uuid: "a86984bc-e3aa-46b6-8984-bce3aa36b60e",
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan"
  },
  {
    uuid: "b3a54c05-b0bf-4b93-a54c-05b0bf6b934e",
    question: "Who is known as the father of modern physics?",
    answers: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla"
    ],
    correctAnswer: "Albert Einstein"
  },
  {
    uuid: "c3cb328e-305e-4e7b-b328-e305e4e7bfc3",
    question: "What is the chemical symbol for gold?",
    answers: ["Au", "Ag", "Fe", "Pb"],
    correctAnswer: "Au"
  },
  {
    uuid: "87531d0d-b22f-45f2-931d-0db22f75f2a1",
    question: "What is the largest ocean on Earth?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    uuid: "2e2e1d9a-f593-4ad2-ae1d-9af593ead2c7",
    question: 'Who wrote the famous play "Romeo and Juliet"?',
    answers: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Emily Brontë"
    ],
    correctAnswer: "William Shakespeare"
  },
  {
    uuid: "ed7f1a08-2a82-4be1-9f1a-082a820be124",
    question: "What is the primary ingredient in guacamole?",
    answers: ["Avocado", "Tomato", "Onion", "Garlic"],
    correctAnswer: "Avocado"
  },
  {
    uuid: "fac6e79d-6895-4b91-86e7-9d6895fb91d0",
    question: "Who invented the telephone?",
    answers: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Guglielmo Marconi"
    ],
    correctAnswer: "Alexander Graham Bell"
  },
  {
    uuid: "2b875db7-6da9-4d14-875d-b76da94d14a3",
    question: "What is the chemical symbol for oxygen?",
    answers: ["O2", "CO2", "H2O", "O3"],
    correctAnswer: "O2"
  },
  {
    uuid: "d0d5902a-7e1b-475b-8590-2a7e1b275b6b",
    question: 'Who is the author of "1984"?',
    answers: [
      "George Orwell",
      "Aldous Huxley",
      "J.R.R. Tolkien",
      "Ray Bradbury"
    ],
    correctAnswer: "George Orwell"
  },
  {
    uuid: "2edae1fc-833b-4910-adae-1fc833b49108",
    question: "What is the largest mammal in the world?",
    answers: ["Blue Whale", "African Elephant", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
  },
  {
    uuid: "89a588d5-74e4-49b4-a588-d574e449b4a2",
    question: "What is the capital of Brazil?",
    answers: ["Rio de Janeiro", "Brasília", "São Paulo", "Buenos Aires"],
    correctAnswer: "Brasília"
  },
  {
    uuid: "7f99a0aa-d2c9-4518-99a0-aad2c995189b",
    question: "Who discovered penicillin?",
    answers: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Jonas Salk"],
    correctAnswer: "Alexander Fleming"
  },
  {
    uuid: "6412e6de-2a6d-40f5-912e-6de2a6d40f54",
    question: "What is the chemical formula for table salt?",
    answers: ["NaCl", "H2O", "CO2", "KCl"],
    correctAnswer: "NaCl"
  }
];

export const getQuestions = async (): Promise<Question[]> => {
  // Simulate API call or database query to fetch questions
  return Promise.resolve(mockQuestions);
};
