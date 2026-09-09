export interface ServiceOffering {
  id: string;
  name: string;
  subtitle: string;
  tags: string[];
  image: string;
  description: string;
  keyPoints: string[];
  idealFor: string;
}

export interface InquiryState {
  yearGroup: string;
  subject: string;
  goal: string;
  parentName?: string;
  phone?: string;
  additionalNotes?: string;
}

export type ActiveTab = 'home' | 'subjects' | 'contact';
