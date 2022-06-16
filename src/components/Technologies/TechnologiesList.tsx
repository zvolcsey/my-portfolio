import { FC } from 'react';

import styles from './TechnologiesList.module.css';
import Technology from './Technology';

const TechnologiesList: FC<{ items: string[]; className: string }> = (
  props
) => {
  const { items, className } = props;

  const technologies = items.map((item) => (
    <Technology key={item} item={item} />
  ));

  return <ul className={`${styles.items} ${className}`}>{technologies}</ul>;
};

export default TechnologiesList;
