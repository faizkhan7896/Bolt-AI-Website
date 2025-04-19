import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  href?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  href = '/services',
  className = '',
}) => {
  return (
    <div className={`card group relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        {/* Icon */}
        <div className="bg-indigo-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-indigo-500">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-400 mb-6">{description}</p>
        
        {/* Features list */}
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-400 text-sm">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        {/* Link */}
        <Link 
          to={href} 
          className="inline-flex items-center text-indigo-500 font-medium hover:text-indigo-400 transition-colors"
        >
          Learn more
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;