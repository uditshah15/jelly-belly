'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className = '', 
    children, 
    disabled,
    ...props 
  }, ref) => {
    const baseClasses = 'transition-all duration-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed bg-red-700 text-white hover:bg-red-800 px-4 py-2 text-sm';

    const classes = `${baseClasses} ${className}`;

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 