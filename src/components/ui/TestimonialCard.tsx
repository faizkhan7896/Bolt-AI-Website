import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  companyName?: string;
  imageUrl?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  companyName,
  imageUrl,
  className = '',
}) => {
  return (
    <div className={`card relative ${className}`}>
      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-indigo-600/30">
        <Quote size={40} />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <p className="text-gray-300 mb-6 relative z-10">{quote}</p>
        
        <div className="flex items-center mt-4">
          {imageUrl && (
            <div className="mr-4">
              <img 
                src={imageUrl} 
                alt={name} 
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          )}
          
          <div>
            <h4 className="font-medium text-white">{name}</h4>
            <p className="text-sm text-gray-400">
              {title}
              {companyName && <span>, {companyName}</span>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;