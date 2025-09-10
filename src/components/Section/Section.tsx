// src/components/Section/Section.tsx
import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export const Section = ({ children, className = '' }: SectionProps) => {
  return (
    <section className={`${styles.section} ${className}`}>{children}</section>
  );
};
