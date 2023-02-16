import { FC } from 'react';

import styles from './QuoteSection.module.css';

const QuoteSection: FC<Record<string, never>> = () => {
  return (
    <section className={styles['quote-section']}>
      <p className={styles['quote-text']}>
        &quot;You have power over your mind - not outside events. Realize this,
        and you will find strength.&quot; <span>- Marcus Aurelius</span>
      </p>
    </section>
  );
};

export default QuoteSection;
