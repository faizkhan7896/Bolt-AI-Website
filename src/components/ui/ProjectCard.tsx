import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  category: string;
  description: string;
  link?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  category,
  description,
  link = '#',
  className = '',
}) => {
  return (
    <div className={`overflow-hidden group ${className}`}>
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-indigo-900/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <Link 
            to={link} 
            className="btn btn-primary transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          >
            View Project
            <ExternalLink size={16} className="ml-2" />
          </Link>
        </div>
      </div>
      
      {/* Content */}
      <div>
        <span className="text-indigo-500 text-sm font-medium">{category}</span>
        <h3 className="text-lg font-semibold text-white mt-1 mb-2">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;