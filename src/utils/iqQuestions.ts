
export interface IQQuestion {
  id: number;
  question: string;
  description?: string;
  options: string[];
  correctAnswer: string;
  category: 'pattern' | 'logic' | 'math' | 'sequence' | 'spatial' | 'visual';
  visual?: {
    type: 'shapes' | 'grid' | 'sequence';
    pattern: any;
    options?: string[];
  };
}

const questionPool: IQQuestion[] = [
  // Pattern Recognition Questions
  {
    id: 1,
    question: "Which shape completes the pattern?",
    description: "Find the missing piece in the 3x3 grid",
    options: ["A", "B", "C", "D"],
    correctAnswer: "C",
    category: "visual",
    visual: {
      type: "grid",
      pattern: [
        ["circle-filled", "square-outline", "triangle-filled"],
        ["square-filled", "triangle-outline", "circle-filled"],
        ["triangle-filled", "circle-outline", "?"]
      ],
      options: ["square-filled", "diamond-outline", "square-outline", "pentagon-filled"]
    }
  },

  {
    id: 2,
    question: "Which shape continues the sequence?",
    description: "Follow the rotation pattern",
    options: ["A", "B", "C", "D"],
    correctAnswer: "B",
    category: "spatial",
    visual: {
      type: "sequence",
      pattern: [
        ["triangle-filled", "square-filled", "circle-filled"],
        ["square-filled", "circle-filled", "triangle-filled"],
        ["circle-filled", "triangle-filled", "?"]
      ],
      options: ["triangle-outline", "square-filled", "circle-outline", "diamond-filled"]
    }
  },

  {
    id: 3,
    question: "Complete the alternating pattern",
    description: "Find the correct alternation",
    options: ["A", "B", "C", "D"],
    correctAnswer: "A",
    category: "pattern",
    visual: {
      type: "grid",
      pattern: [
        ["circle-filled", "circle-outline", "circle-filled"],
        ["square-outline", "square-filled", "square-outline"],
        ["triangle-filled", "triangle-outline", "?"]
      ],
      options: ["triangle-filled", "triangle-outline", "circle-filled", "square-filled"]
    }
  },

  {
    id: 4,
    question: "Which shape maintains symmetry?",
    description: "Complete the symmetric pattern",
    options: ["A", "B", "C", "D"],
    correctAnswer: "D",
    category: "spatial",
    visual: {
      type: "grid",
      pattern: [
        ["triangle-filled", "circle-outline", "triangle-filled"],
        ["square-outline", "diamond-filled", "square-outline"],
        ["triangle-filled", "?", "triangle-filled"]
      ],
      options: ["triangle-outline", "square-filled", "diamond-outline", "circle-outline"]
    }
  },

  {
    id: 5,
    question: "What comes next in the sequence?",
    description: "Follow the shape progression",
    options: ["A", "B", "C", "D"],
    correctAnswer: "C",
    category: "sequence",
    visual: {
      type: "sequence",
      pattern: [
        ["circle-outline", "square-outline", "triangle-outline"],
        ["circle-filled", "square-filled", "triangle-filled"],
        ["pentagon-outline", "star-outline", "?"]
      ],
      options: ["diamond-outline", "pentagon-filled", "star-filled", "circle-outline"]
    }
  },

  {
    id: 6,
    question: "Complete the diagonal pattern",
    description: "Find the missing diagonal element",
    options: ["A", "B", "C", "D"],
    correctAnswer: "B",
    category: "visual",
    visual: {
      type: "grid",
      pattern: [
        ["circle-filled", "square-outline", "triangle-filled"],
        ["square-outline", "?", "circle-outline"],
        ["triangle-filled", "circle-outline", "square-filled"]
      ],
      options: ["triangle-outline", "triangle-filled", "circle-filled", "square-filled"]
    }
  },

  {
    id: 7,
    question: "Which pattern follows the rule?",
    description: "Apply the transformation rule",
    options: ["A", "B", "C", "D"],
    correctAnswer: "A",
    category: "logic",
    visual: {
      type: "sequence",
      pattern: [
        ["circle-outline", "circle-filled", "square-outline"],
        ["square-outline", "square-filled", "triangle-outline"],
        ["triangle-outline", "triangle-filled", "?"]
      ],
      options: ["pentagon-outline", "diamond-filled", "star-outline", "circle-filled"]
    }
  },

  {
    id: 8,
    question: "Complete the corner pattern",
    description: "Find the correct corner piece",
    options: ["A", "B", "C", "D"],
    correctAnswer: "C",
    category: "spatial",
    visual: {
      type: "grid",
      pattern: [
        ["square-filled", "triangle-outline", "circle-filled"],
        ["triangle-outline", "circle-filled", "square-outline"],
        ["circle-filled", "square-outline", "?"]
      ],
      options: ["circle-outline", "square-filled", "triangle-outline", "diamond-filled"]
    }
  },

  {
    id: 9,
    question: "Which shape completes the cycle?",
    description: "Follow the cyclical pattern",
    options: ["A", "B", "C", "D"],
    correctAnswer: "D",
    category: "sequence",
    visual: {
      type: "sequence",
      pattern: [
        ["circle-filled", "square-filled", "triangle-filled"],
        ["triangle-filled", "circle-filled", "square-filled"],
        ["square-filled", "triangle-filled", "?"]
      ],
      options: ["square-filled", "triangle-filled", "pentagon-filled", "circle-filled"]
    }
  },

  {
    id: 10,
    question: "Complete the mirror pattern",
    description: "Find the correct mirror image",
    options: ["A", "B", "C", "D"],
    correctAnswer: "B",
    category: "spatial",
    visual: {
      type: "grid",
      pattern: [
        ["triangle-filled", "square-filled", "triangle-filled"],
        ["circle-outline", "diamond-filled", "circle-outline"],
        ["triangle-filled", "?", "triangle-filled"]
      ],
      options: ["triangle-filled", "square-filled", "diamond-filled", "circle-outline"]
    }
  },

  {
    id: 11,
    question: "Which pattern shows progression?",
    description: "Follow the progression rule",
    options: ["A", "B", "C", "D"],
    correctAnswer: "A",
    category: "logic",
    visual: {
      type: "sequence",
      pattern: [
        ["circle-outline", "circle-filled", "square-outline"],
        ["square-outline", "square-filled", "triangle-outline"],
        ["triangle-outline", "triangle-filled", "?"]
      ],
      options: ["diamond-outline", "pentagon-filled", "star-outline", "circle-filled"]
    }
  },

  {
    id: 12,
    question: "Complete the cross pattern",
    description: "Find the center piece",
    options: ["A", "B", "C", "D"],
    correctAnswer: "C",
    category: "visual",
    visual: {
      type: "grid",
      pattern: [
        ["square-outline", "triangle-filled", "square-outline"],
        ["triangle-filled", "?", "triangle-filled"],
        ["square-outline", "triangle-filled", "square-outline"]
      ],
      options: ["triangle-outline", "square-filled", "circle-filled", "diamond-outline"]
    }
  },

  {
    id: 13,
    question: "Which shape follows the sequence?",
    description: "Continue the logical sequence",
    options: ["A", "B", "C", "D"],
    correctAnswer: "B",
    category: "sequence",
    visual: {
      type: "sequence",
      pattern: [
        ["circle-filled", "square-outline", "triangle-filled"],
        ["square-outline", "triangle-filled", "circle-outline"],
        ["triangle-filled", "circle-outline", "?"]
      ],
      options: ["triangle-outline", "square-filled", "circle-filled", "diamond-outline"]
    }
  },

  {
    id: 14,
    question: "Complete the alternating grid",
    description: "Find the alternating pattern",
    options: ["A", "B", "C", "D"],
    correctAnswer: "D",
    category: "pattern",
    visual: {
      type: "grid",
      pattern: [
        ["circle-filled", "square-outline", "circle-filled"],
        ["square-outline", "circle-filled", "square-outline"],
        ["circle-filled", "square-outline", "?"]
      ],
      options: ["square-outline", "triangle-filled", "pentagon-outline", "circle-filled"]
    }
  },

  {
    id: 15,
    question: "Which transformation is correct?",
    description: "Apply the transformation rule",
    options: ["A", "B", "C", "D"],
    correctAnswer: "A",
    category: "logic",
    visual: {
      type: "sequence",
      pattern: [
        ["triangle-outline", "triangle-filled", "square-outline"],
        ["square-outline", "square-filled", "circle-outline"],
        ["circle-outline", "circle-filled", "?"]
      ],
      options: ["pentagon-outline", "diamond-filled", "star-outline", "triangle-filled"]
    }
  },

  {
    id: 16,
    question: "Complete the radial pattern",
    description: "Find the radial completion",
    options: ["A", "B", "C", "D"],
    correctAnswer: "C",
    category: "spatial",
    visual: {
      type: "grid",
      pattern: [
        ["triangle-filled", "circle-outline", "square-filled"],
        ["circle-outline", "diamond-filled", "circle-outline"],
        ["square-filled", "circle-outline", "?"]
      ],
      options: ["circle-filled", "square-outline", "triangle-filled", "diamond-outline"]
    }
  },

  {
    id: 17,
    question: "Which pattern maintains balance?",
    description: "Keep the visual balance",
    options: ["A", "B", "C", "D"],
    correctAnswer: "B",
    category: "visual",
    visual: {
      type: "grid",
      pattern: [
        ["circle-filled", "triangle-outline", "circle-filled"],
        ["triangle-outline", "square-filled", "triangle-outline"],
        ["circle-filled", "?", "circle-filled"]
      ],
      options: ["circle-outline", "triangle-outline", "square-filled", "diamond-filled"]
    }
  },

  {
    id: 18,
    question: "Complete the flowing sequence",
    description: "Follow the flow pattern",
    options: ["A", "B", "C", "D"],
    correctAnswer: "D",
    category: "sequence",
    visual: {
      type: "sequence",
      pattern: [
        ["square-filled", "triangle-outline", "circle-filled"],
        ["triangle-outline", "circle-filled", "square-outline"],
        ["circle-filled", "square-outline", "?"]
      ],
      options: ["circle-outline", "square-filled", "pentagon-filled", "triangle-filled"]
    }
  },

  {
    id: 19,
    question: "Which shape completes the matrix?",
    description: "Find the matrix completion",
    options: ["A", "B", "C", "D"],
    correctAnswer: "A",
    category: "logic",
    visual: {
      type: "grid",
      pattern: [
        ["pentagon-filled", "star-outline", "diamond-filled"],
        ["star-outline", "diamond-filled", "pentagon-outline"],
        ["diamond-filled", "pentagon-outline", "?"]
      ],
      options: ["star-filled", "pentagon-filled", "diamond-outline", "circle-filled"]
    }
  },

  {
    id: 20,
    question: "Complete the final pattern",
    description: "Apply all learned rules",
    options: ["A", "B", "C", "D"],
    correctAnswer: "C",
    category: "visual",
    visual: {
      type: "grid",
      pattern: [
        ["circle-outline", "square-filled", "triangle-outline"],
        ["square-filled", "triangle-outline", "circle-filled"],
        ["triangle-outline", "circle-filled", "?"]
      ],
      options: ["triangle-filled", "circle-outline", "square-outline", "diamond-filled"]
    }
  },

  {
    id: 21,
    question: "Which pattern shows rotation?",
    description: "Follow the rotation sequence",
    options: ["A", "B", "C", "D"],
    correctAnswer: "B",
    category: "spatial",
    visual: {
      type: "sequence",
      pattern: [
        ["triangle-filled", "square-filled", "pentagon-filled"],
        ["square-filled", "pentagon-filled", "triangle-filled"],
        ["pentagon-filled", "triangle-filled", "?"]
      ],
      options: ["pentagon-filled", "square-filled", "circle-filled", "diamond-filled"]
    }
  },

  {
    id: 22,
    question: "Complete the size progression",
    description: "Follow the size pattern",
    options: ["A", "B", "C", "D"],
    correctAnswer: "A",
    category: "sequence",
    visual: {
      type: "sequence",
      pattern: [
        ["circle-outline", "square-outline", "triangle-outline"],
        ["circle-filled", "square-filled", "triangle-filled"],
        ["pentagon-outline", "star-outline", "?"]
      ],
      options: ["diamond-outline", "pentagon-filled", "star-filled", "circle-outline"]
    }
  },

  {
    id: 23,
    question: "Which shape maintains the rule?",
    description: "Apply the consistent rule",
    options: ["A", "B", "C", "D"],
    correctAnswer: "D",
    category: "logic",
    visual: {
      type: "grid",
      pattern: [
        ["circle-filled", "square-outline", "triangle-filled"],
        ["square-outline", "triangle-filled", "circle-outline"],
        ["triangle-filled", "circle-outline", "?"]
      ],
      options: ["triangle-outline", "circle-filled", "pentagon-filled", "square-filled"]
    }
  },

  {
    id: 24,
    question: "Complete the checkerboard pattern",
    description: "Find the checkerboard piece",
    options: ["A", "B", "C", "D"],
    correctAnswer: "C",
    category: "pattern",
    visual: {
      type: "grid",
      pattern: [
        ["square-filled", "square-outline", "square-filled"],
        ["square-outline", "square-filled", "square-outline"],
        ["square-filled", "square-outline", "?"]
      ],
      options: ["square-outline", "triangle-filled", "square-filled", "circle-filled"]
    }
  },

  {
    id: 25,
    question: "Which pattern shows symmetry?",
    description: "Complete the symmetric design",
    options: ["A", "B", "C", "D"],
    correctAnswer: "B",
    category: "spatial",
    visual: {
      type: "grid",
      pattern: [
        ["triangle-filled", "circle-outline", "triangle-filled"],
        ["circle-outline", "diamond-filled", "circle-outline"],
        ["triangle-filled", "?", "triangle-filled"]
      ],
      options: ["triangle-outline", "circle-outline", "diamond-filled", "square-filled"]
    }
  },

  {
    id: 26,
    question: "Complete the spiral sequence",
    description: "Follow the spiral direction",
    options: ["A", "B", "C", "D"],
    correctAnswer: "A",
    category: "sequence",
    visual: {
      type: "sequence",
      pattern: [
        ["circle-filled", "square-filled", "triangle-filled"],
        ["triangle-filled", "pentagon-filled", "star-filled"],
        ["star-filled", "diamond-filled", "?"]
      ],
      options: ["circle-filled", "square-filled", "pentagon-filled", "triangle-filled"]
    }
  },

  {
    id: 27,
    question: "Which shape follows the cycle?",
    description: "Continue the cyclical pattern",
    options: ["A", "B", "C", "D"],
    correctAnswer: "D",
    category: "logic",
    visual: {
      type: "sequence",
      pattern: [
        ["pentagon-outline", "star-filled", "diamond-outline"],
        ["star-filled", "diamond-outline", "pentagon-filled"],
        ["diamond-outline", "pentagon-filled", "?"]
      ],
      options: ["diamond-filled", "pentagon-outline", "circle-filled", "star-outline"]
    }
  },

  {
    id: 28,
    question: "Complete the gradient pattern",
    description: "Follow the shading progression",
    options: ["A", "B", "C", "D"],
    correctAnswer: "C",
    category: "visual",
    visual: {
      type: "sequence",
      pattern: [
        ["circle-outline", "circle-filled", "square-outline"],
        ["square-outline", "square-filled", "triangle-outline"],
        ["triangle-outline", "triangle-filled", "?"]
      ],
      options: ["pentagon-filled", "diamond-outline", "pentagon-outline", "star-filled"]
    }
  },

  {
    id: 29,
    question: "Which pattern shows reflection?",
    description: "Find the correct reflection",
    options: ["A", "B", "C", "D"],
    correctAnswer: "B",
    category: "spatial",
    visual: {
      type: "grid",
      pattern: [
        ["triangle-filled", "circle-outline", "square-filled"],
        ["circle-outline", "diamond-filled", "circle-outline"],
        ["square-filled", "?", "triangle-filled"]
      ],
      options: ["square-outline", "circle-outline", "diamond-filled", "triangle-outline"]
    }
  },

  {
    id: 30,
    question: "Complete the final challenge",
    description: "Apply all pattern recognition skills",
    options: ["A", "B", "C", "D"],
    correctAnswer: "A",
    category: "logic",
    visual: {
      type: "grid",
      pattern: [
        ["star-filled", "pentagon-outline", "diamond-filled"],
        ["pentagon-outline", "diamond-filled", "star-outline"],
        ["diamond-filled", "star-outline", "?"]
      ],
      options: ["pentagon-filled", "star-filled", "diamond-outline", "circle-filled"]
    }
  }
];

export function generateRandomQuestions(): IQQuestion[] {
  // Shuffle the question pool and select 30 questions
  const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 30);
}

export function calculateIQ(correctAnswers: number): number {
  // Standard IQ calculation based on correct answers out of 30
  // This uses a normalized distribution with mean 100 and standard deviation 15
  const percentage = correctAnswers / 30;
  
  // Map percentage to IQ scale (rough approximation)
  if (percentage >= 0.97) return 145; // Genius level
  if (percentage >= 0.93) return 140;
  if (percentage >= 0.87) return 135;
  if (percentage >= 0.80) return 130; // Very superior
  if (percentage >= 0.73) return 125;
  if (percentage >= 0.67) return 120; // Superior
  if (percentage >= 0.60) return 115;
  if (percentage >= 0.53) return 110; // High average
  if (percentage >= 0.47) return 105;
  if (percentage >= 0.40) return 100; // Average
  if (percentage >= 0.33) return 95;
  if (percentage >= 0.27) return 90;  // Low average
  if (percentage >= 0.20) return 85;
  if (percentage >= 0.13) return 80;
  if (percentage >= 0.07) return 75;
  return 70; // Below average
}
