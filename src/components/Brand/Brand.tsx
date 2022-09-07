import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Brand.module.css';

const Brand: FC<{ className?: string }> = (props) => {
  const { className } = props;

  return (
    <Link to="/" className={`${styles.brand} ${className}`}>
      Zoltán Völcsey
    </Link>
  );
};

export default Brand;
