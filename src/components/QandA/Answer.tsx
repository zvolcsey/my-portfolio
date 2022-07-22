import { FC, ReactNode } from 'react';

import styles from './Answer.module.css';

const Answer: FC<{
  speechBubblePosition?: 'left' | 'right';
  profilePosition?: 'left' | 'right';
  children: ReactNode;
}> = (props) => {
  const { speechBubblePosition, profilePosition, children } = props;

  const speechBubblePositionStyle =
    speechBubblePosition === 'left'
      ? styles['left-speech-bubble']
      : styles['right-speech-bubble'];
  const profilePositionStyle =
    profilePosition === 'left'
      ? styles['left-profile-picture']
      : styles['right-profile-picture'];

  return (
    <div className={styles['answer-container']}>
      <div
        className={`${styles['profile-picture']} ${profilePositionStyle}`}
      ></div>
      <div
        className={`${styles['speech-bubble']} ${speechBubblePositionStyle}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Answer;
