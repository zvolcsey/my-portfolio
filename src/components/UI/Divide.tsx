import { FC } from 'react';

import styles from './Divide.module.css';

const Divide: FC<{
  text: 'AND' | 'OR';
  className?: string;
}> = (props) => {
  const { text, className } = props;

  return (
    <div className={`${styles.divide} ${className}`}>
      <div className={styles.line}></div>
      <div className={styles.or}>{text}</div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Divide;
