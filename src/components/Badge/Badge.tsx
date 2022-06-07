import { FC, ReactNode } from 'react';

import styles from './Badge.module.css';

const Badge: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return <span className={styles.badge}>{children}</span>;
};

export default Badge;
