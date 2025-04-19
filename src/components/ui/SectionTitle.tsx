import React from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  center = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center mx-auto' : ''} ${className}`}>
      {subtitle && (
        <span className="text-indigo-500 font-medium text-sm uppercase tracking-wider mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;