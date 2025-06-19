import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

type TextVariant =
  | 'display1'
  | 'display2'
  | 'display3'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption'
  | 'overline';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export default function Text({
  variant = 'body1',
  children,
  className = '',
  as: Component = 'div',
  style = {},
  ...props
}: TextProps) {
  const { theme } = useTheme();

  // Theme-specific font families with special, readable fonts
  const getThemeFont = () => {
    switch (theme) {
      case 'pink':
        return 'font-rounded'; // Quicksand - rounded, friendly, modern
      case 'blue':
        return 'font-modern'; // Montserrat - clean, professional, geometric
      case 'neutral':
        return 'font-serif'; // Playfair Display - elegant, sophisticated
      default:
        return 'font-rounded';
    }
  };

  // Typography variants with responsive classes
  const getVariantClasses = (): string => {
    const baseClasses = 'transition-colors duration-200';
    const themeFont = getThemeFont();

    switch (variant) {
      case 'display1':
        return `${baseClasses} ${themeFont} text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight`;

      case 'display2':
        return `${baseClasses} ${themeFont} text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight`;

      case 'display3':
        return `${baseClasses} ${themeFont} text-2xl md:text-4xl lg:text-5xl font-bold leading-tight`;

      case 'h1':
        return `${baseClasses} ${themeFont} text-2xl md:text-4xl lg:text-5xl font-bold leading-tight`;

      case 'h2':
        return `${baseClasses} ${themeFont} text-xl md:text-3xl lg:text-4xl font-bold leading-tight`;

      case 'h3':
        return `${baseClasses} ${themeFont} text-lg md:text-2xl lg:text-3xl font-semibold leading-tight`;

      case 'h4':
        return `${baseClasses} ${themeFont} text-base md:text-xl lg:text-2xl font-semibold leading-tight`;

      case 'h5':
        return `${baseClasses} ${themeFont} text-sm md:text-lg lg:text-xl font-medium leading-tight`;

      case 'h6':
        return `${baseClasses} ${themeFont} text-xs md:text-base lg:text-lg font-medium leading-tight`;

      case 'body1':
        return `${baseClasses} font-sans text-base md:text-lg leading-relaxed`;

      case 'body2':
        return `${baseClasses} font-sans text-sm md:text-base leading-relaxed`;

      case 'body3':
        return `${baseClasses} font-sans text-xs md:text-sm leading-relaxed`;

      case 'caption':
        return `${baseClasses} font-mono text-xs leading-relaxed`;

      case 'overline':
        return `${baseClasses} font-sans text-xs font-medium uppercase tracking-wider`;

      default:
        return `${baseClasses} font-sans text-base leading-relaxed`;
    }
  };

  const combinedStyle = {
    color: 'var(--color-text)',
    ...style
  };

  return (
    <Component className={`${getVariantClasses()} ${className}`} style={combinedStyle} {...props}>
      {children}
    </Component>
  );
}
