import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 select-none rounded-none focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-brand-dark disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-brand-orange text-white hover:bg-brand-orange-hover shadow-lg shadow-brand-orange/20 border border-brand-orange',
    secondary:
      'bg-transparent text-brand-text border border-brand-border hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/5',
    ghost:
      'bg-transparent text-brand-text hover:text-brand-orange hover:bg-white/5 border border-transparent',
    outline:
      'bg-brand-card text-brand-text border border-brand-border hover:border-brand-text/50',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles} {...props}>
      {content}
    </button>
  );
}
