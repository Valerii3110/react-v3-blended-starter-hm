import type { ReactNode } from 'react';
import styles from './Grid.module.css';

interface GridProps {
  children: ReactNode;
}

export const Grid = ({ children }: GridProps) => {
  return <ul className={styles.grid}>{children}</ul>;
};

interface GridItemProps {
  children: ReactNode;
}

export const GridItem = ({ children }: GridItemProps) => {
  return <li className={styles.item}>{children}</li>;
};
