import { FC, ReactNode } from 'react';

import styles from './QandAItems.module.css';

const QandAItems: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return <ul className={styles.items}>{children}</ul>;
};

export default QandAItems;
