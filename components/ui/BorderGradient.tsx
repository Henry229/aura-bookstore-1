import React from 'react';

interface BorderGradientProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  onClick?: () => void;
  style?: React.CSSProperties;
  [key: string]: any;
}

export const BorderGradient: React.FC<BorderGradientProps> = ({ 
  children, 
  className = '', 
  as: Component = 'div',
  onClick,
  style,
  ...props
}) => {
  return (
    <Component 
      className={`border-gradient ${className}`} 
      onClick={onClick}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};