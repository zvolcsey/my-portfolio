import { FC } from 'react';

import styles from './Loading.module.css';

const Loading: FC<Record<string, never>> = () => {
  return (
    <div className={styles['loading-container']}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  );
};

export default Loading;
