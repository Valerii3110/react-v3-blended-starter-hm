import type { ReactNode } from 'react';
import styles from './GridItem.module.css';

interface GridItemProps {
  children: ReactNode;
}

export const GridItem = ({ children }: GridItemProps) => {
  return <li className={styles.gridItem}>{children}</li>;
};
