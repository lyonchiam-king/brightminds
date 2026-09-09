import { ServiceOffering } from '../types';

import privateTuitionImg from '../assets/images/private_tuition_1788971675275.jpg';
import homeLearningImg from '../assets/images/home_learning_1788971689688.jpg';
import organizedLessonsImg from '../assets/images/organized_lessons_1788971702899.jpg';

export const serviceOfferings: ServiceOffering[] = [
  {
    id: 'private-tuition',
    name: 'Private Tuition',
    subtitle: 'Tailored 1-on-1 focus designed around your child’s specific learning pace.',
    tags: ['1-on-1 focus', 'Custom pace'],
    image: privateTuitionImg,
    description: 'Dedicated one-to-one tutoring sessions focusing entirely on identified knowledge gaps. Tutors break down complex concepts step-by-step until the student develops true conceptual clarity and exam confidence.',
    keyPoints: [
      'Personalized pace based on individual learning needs',
      'Patient step-by-step explanation of complex topics',
      'Targeted practice on challenging past paper questions',
      'Continuous encouragement and confidence building'
    ],
    idealFor: 'Students needing targeted help in Maths, English, or Science to boost subject grades.'
  },
  {
    id: 'home-learning',
    name: 'Home Learning',
    subtitle: 'Structured task allocation and regular constructive feedback for sustained routine.',
    tags: ['Structured allocation', 'Regular feedback'],
    image: homeLearningImg,
    description: 'Guided home study programs designed to complement weekly sessions. Students receive manageable practice tasks with constructive feedback to reinforce memory and prevent last-minute cramming.',
    keyPoints: [
      'Structured weekly exercise allocations aligned with school syllabus',
      'Clear step-by-step marking with detailed feedback',
      'Helps establish reliable independent study routines at home',
      'Regular progress reporting sent directly to parents'
    ],
    idealFor: 'Parents seeking structured homework support and consistent study habits.'
  },
  {
    id: 'organized-lessons',
    name: 'Organized Lessons',
    subtitle: 'Clear topic roadmaps and lesson plans designed for measurable knowledge growth.',
    tags: ['Clear plans', 'Visible progress'],
    image: organizedLessonsImg,
    description: 'Every session follows a transparent, well-structured module plan. Parents and students always know what topic is covered, what skills are mastered, and what milestones are coming next.',
    keyPoints: [
      'Transparent termly and weekly lesson objectives',
      'Systematic topic coverage with regular revision checkpoints',
      'Measurable knowledge tracking to show real grade improvements',
      'Comprehensive study notes and tailored exercise worksheets'
    ],
    idealFor: 'Students preparing for upcoming school exams, SATs, 11+, GCSEs, or A-Levels.'
  }
];

export const proofPoints = [
  {
    badge: 'Patient Teaching',
    quote: 'Patient, knowledgeable, and supportive tutors',
    detail: 'Praised by SW15 parents for taking the time to explain until concepts truly click.'
  },
  {
    badge: 'Visible Growth',
    quote: 'Visible improvement in subject knowledge',
    detail: 'Consistently reflected in school reports, topic tests, and student confidence.'
  },
  {
    badge: 'Clear Explanations',
    quote: 'Clear explanations praised by parents',
    detail: 'Complex exam topics broken down into simple, easy-to-understand logical steps.'
  }
];
