import { FC, ReactNode } from 'react';

import styles from './Badge.module.css';

const Badge: FC<{ className?: string; children: ReactNode }> = (props) => {
  const { className, children } = props;

  return <div className={`${styles.badge} ${className}`}>{children}</div>;
};

export default Badge;
