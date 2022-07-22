import { FC, ReactNode } from 'react';

import styles from './QandAItem.module.css';

const QandAItem: FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return <li className={styles.item}>{children}</li>;
};

export default QandAItem;
