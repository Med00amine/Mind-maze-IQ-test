
import React from 'react';
import { Square, Circle, Pentagon, Triangle, Star, Diamond } from 'lucide-react';
import { IQQuestion } from '@/utils/iqQuestions';

interface VisualQuestionProps {
  question: IQQuestion;
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
}

const VisualQuestion: React.FC<VisualQuestionProps> = ({ 
  question, 
  selectedAnswer, 
  onAnswerSelect 
}) => {
  console.log('VisualQuestion received:', question);
  
  if (!question.visual) {
    console.log('No visual data found for question');
    return null;
  }

  const renderShape = (shape: string, size: string = "w-12 h-12") => {
    console.log('Rendering shape:', shape);
    
    if (shape === "?") {
      return (
        <div className={`${size} bg-yellow-400 rounded-lg flex items-center justify-center text-2xl font-bold text-yellow-900 animate-pulse`}>
          ?
        </div>
      );
    }

    // Handle different shape patterns
    const getShapeDisplay = () => {
      if (shape.includes('circle')) {
        if (shape.includes('filled')) {
          return <Circle className="w-8 h-8 fill-green-400 text-green-400" />;
        } else {
          return <Circle className="w-8 h-8 text-green-400" />;
        }
      }
      
      if (shape.includes('square')) {
        if (shape.includes('filled')) {
          return <Square className="w-8 h-8 fill-blue-400 text-blue-400" />;
        } else {
          return <Square className="w-8 h-8 text-blue-400" />;
        }
      }
      
      if (shape.includes('triangle')) {
        if (shape.includes('filled')) {
          return <Triangle className="w-8 h-8 fill-red-400 text-red-400" />;
        } else {
          return <Triangle className="w-8 h-8 text-red-400" />;
        }
      }
      
      if (shape.includes('pentagon')) {
        if (shape.includes('filled')) {
          return <Pentagon className="w-8 h-8 fill-purple-400 text-purple-400" />;
        } else {
          return <Pentagon className="w-8 h-8 text-purple-400" />;
        }
      }
      
      if (shape.includes('star')) {
        if (shape.includes('filled')) {
          return <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />;
        } else {
          return <Star className="w-8 h-8 text-yellow-400" />;
        }
      }
      
      if (shape.includes('diamond')) {
        if (shape.includes('filled')) {
          return <Diamond className="w-8 h-8 fill-pink-400 text-pink-400" />;
        } else {
          return <Diamond className="w-8 h-8 text-pink-400" />;
        }
      }

      // Default fallback - show the shape name as text
      return (
        <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-xs text-white">
          {shape.substring(0, 3)}
        </div>
      );
    };

    return (
      <div className={`${size} flex items-center justify-center transition-all duration-300`}>
        {getShapeDisplay()}
      </div>
    );
  };

  const renderPatternGrid = () => {
    console.log('Pattern data:', question.visual.pattern);
    
    return (
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {question.visual.pattern.flat().map((item: string, index: number) => {
            console.log(`Rendering pattern item ${index}:`, item);
            return (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {renderShape(item)}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderVisualOptions = () => {
    if (!question.visual.options) {
      console.log('No visual options found');
      return null;
    }

    console.log('Visual options:', question.visual.options);

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {question.visual.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(question.options[index])}
            className={`p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${
              selectedAnswer === question.options[index]
                ? 'border-purple-500 bg-purple-500/20'
                : 'border-gray-600 bg-gray-700/50 hover:border-gray-400'
            } animate-fade-in`}
            style={{ animationDelay: `${0.8 + index * 0.1}s` }}
          >
            <div className="flex flex-col items-center space-y-2">
              {renderShape(option, "w-8 h-8")}
              <span className="text-sm font-semibold text-white">
                {String.fromCharCode(65 + index)}
              </span>
            </div>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="animate-scale-in">
      {renderPatternGrid()}
      {renderVisualOptions()}
    </div>
  );
};

export default VisualQuestion;
