import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  BookOpen, 
  Calculator, 
  Flask, 
  Globe, 
  History as HistoryIcon, 
  Code, 
  Music, 
  Languages 
} from 'lucide-react';

interface SubjectSelectorProps {
  selectedSubject: string;
  onSelect: (subject: string) => void;
}

const subjects = [
  { id: 'general', name: 'General', icon: BookOpen },
  { id: 'math', name: 'Mathematics', icon: Calculator },
  { id: 'science', name: 'Science', icon: Flask },
  { id: 'social', name: 'Social Studies', icon: Globe },
  { id: 'history', name: 'History', icon: HistoryIcon },
  { id: 'cs', name: 'Computer Science', icon: Code },
  { id: 'arts', name: 'Arts & Music', icon: Music },
  { id: 'language', name: 'Languages', icon: Languages },
];

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ selectedSubject, onSelect }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium mb-2">Select Subject</h3>
      <div className="grid grid-cols-2 gap-2">
        {subjects.map((subject) => {
          const Icon = subject.icon;
          return (
            <button
              key={subject.id}
              onClick={() => onSelect(subject.id)}
              className={`p-2 rounded text-xs flex flex-col items-center justify-center transition-colors ${
                selectedSubject === subject.id
                  ? isDarkMode
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-100 text-indigo-800'
                  : isDarkMode
                  ? 'bg-gray-700 hover:bg-gray-600'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Icon className="h-4 w-4 mb-1" />
              <span>{subject.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectSelector;