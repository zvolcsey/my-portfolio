import { FC, ReactNode } from 'react';

import styles from './ExternalLink.module.css';

const ExternalLink: FC<{
  href?: string;
  className?: string;
  children: ReactNode;
}> = (props) => {
  const { href, className, children } = props;

  return (
    <a
      href={href}
      target='_blank'
      rel={'noreferrer noopener'}
      className={`${styles.link} ${className}`}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
