export interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: React.FC;
}