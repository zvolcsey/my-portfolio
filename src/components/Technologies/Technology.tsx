import { FC } from 'react';

import styles from './Technology.module.css';

const Technology: FC<{ item: string }> = (props) => {
  const { item } = props;

  return <li className={styles.item}>{item}</li>;
};

export default Technology;
