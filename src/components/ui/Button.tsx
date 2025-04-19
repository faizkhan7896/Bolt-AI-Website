import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'left',
}) => {
  // Base classes
  const baseClasses = 'btn inline-flex items-center justify-center rounded-md font-medium transition-all duration-300';
  
  // Size classes
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'bg-transparent border border-gray-600 hover:border-indigo-500 hover:bg-gray-900 text-white',
  };
  
  // Combine classes
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`;
  
  // Render icon and content based on position
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  // If href is provided, render Link component
  if (href) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }
  
  // Otherwise render button element
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;