import { PulseLoader } from 'react-spinners';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.backdrop}>
      <PulseLoader color="#36d7b7" />
    </div>
  );
};
