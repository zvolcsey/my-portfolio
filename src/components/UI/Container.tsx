import { FC, ReactNode } from 'react';

import styles from './Container.module.css';

const Container: FC<{
  children: ReactNode;
  className?: string;
}> = (props) => {
  const { children, className } = props;

  return (
    <section className={`${styles.container} ${className}`}>{children}</section>
  );
};

export default Container;
