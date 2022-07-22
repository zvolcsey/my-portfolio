import { FC, ReactNode } from 'react';

import styles from './Container.module.css';

const Container: FC<{
  children: ReactNode;
  titlePosition?: 'top' | 'bottom';
  className?: string;
}> = (props) => {
  const { children, titlePosition, className } = props;

  const titlePositionStyle =
    titlePosition === 'top' ? styles['title-top'] : styles['title-bottom'];

  return (
    <section
      className={`${styles.container} ${titlePositionStyle} ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
