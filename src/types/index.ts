export interface Question {
  id: string;
  text: string;
  options: string[];
  category: string;
  level: number;
}

export interface UserProgress {
  level: number;
  points: number;
  questionsAnswered: number;
  answers: Record<string, string>;
}

export interface GameState {
  currentQuestion: Question | null;
  progress: UserProgress;
  isLoading: boolean;
}

export interface User {
  email: string;
  name: string;
}

export interface CareerSuggestion {
  title: string;
  description: string;
  matchPercentage: number;
  courses: Array<{
    title: string;
    platform: string;
    url: string;
  }>;
}