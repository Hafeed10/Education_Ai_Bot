import type { Question } from '../types';

export const questions: Question[] = [
  // Level 1: Basic Career Interests
  {
    id: '1.1',
    text: 'What type of work environment energizes you the most?',
    options: [
      'Fast-paced and dynamic startup',
      'Structured corporate setting',
      'Creative studio environment',
      'Remote and flexible workspace'
    ],
    category: 'Work Environment',
    level: 1
  },
  {
    id: '1.2',
    text: 'Which skill would you most enjoy developing?',
    options: [
      'Technical programming skills',
      'Creative design abilities',
      'Leadership and management',
      'Research and analysis'
    ],
    category: 'Skills',
    level: 1
  },
  // Level 2: Problem Solving
  {
    id: '2.1',
    text: 'How do you prefer to tackle complex problems?',
    options: [
      'Break them down into smaller steps',
      'Collaborate with a team',
      'Research and analyze data',
      'Use creative brainstorming'
    ],
    category: 'Problem Solving',
    level: 2
  },
  {
    id: '2.2',
    text: 'What type of challenges excite you?',
    options: [
      'Technical puzzles and coding',
      'Creative design challenges',
      'People and communication tasks',
      'Strategic planning problems'
    ],
    category: 'Challenges',
    level: 2
  },
  // Level 3: Work Values
  {
    id: '3.1',
    text: 'What motivates you most in your work?',
    options: [
      'Innovation and cutting-edge technology',
      'Making a positive social impact',
      'Financial success and stability',
      'Creative expression and artistry'
    ],
    category: 'Motivation',
    level: 3
  },
  {
    id: '3.2',
    text: 'Which work value is most important to you?',
    options: [
      'Work-life balance',
      'Career advancement',
      'Job security',
      'Professional autonomy'
    ],
    category: 'Values',
    level: 3
  },
  // Level 4: Industry Preferences
  {
    id: '4.1',
    text: 'Which industry interests you most?',
    options: [
      'Technology and Software',
      'Arts and Entertainment',
      'Healthcare and Wellness',
      'Business and Finance'
    ],
    category: 'Industry',
    level: 4
  },
  {
    id: '4.2',
    text: 'What type of organization would you prefer?',
    options: [
      'Innovative tech startup',
      'Large established corporation',
      'Non-profit organization',
      'Creative agency or studio'
    ],
    category: 'Organization',
    level: 4
  },
  // Level 5: Future Goals
  {
    id: '5.1',
    text: 'Where do you see yourself in 5 years?',
    options: [
      'Leading a team or department',
      'Running your own business',
      'Becoming an industry expert',
      'Making a social impact'
    ],
    category: 'Goals',
    level: 5
  },
  {
    id: '5.2',
    text: 'What would be your ideal career achievement?',
    options: [
      'Creating innovative solutions',
      'Building a successful company',
      'Becoming a thought leader',
      'Making positive change in society'
    ],
    category: 'Achievement',
    level: 5
  }
];