// src/components/Text/Text.tsx
import type { ReactNode } from 'react';
import styles from './Text.module.css';

interface TextProps {
  children: ReactNode;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  color?: 'primary' | 'secondary' | 'error' | 'success';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Text = ({
  children,
  textAlign = 'left',
  color = 'primary',
  size = 'medium',
  className = '',
}: TextProps) => {
  const textClasses = `
    ${styles.text}
    ${styles[`align-${textAlign}`]}
    ${styles[`color-${color}`]}
    ${styles[`size-${size}`]}
    ${className}
  `.trim();

  return <p className={textClasses}>{children}</p>;
};
