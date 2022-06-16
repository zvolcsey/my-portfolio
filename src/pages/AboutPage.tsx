import { FC, useEffect } from 'react';

import styles from './AboutPage.module.css';

const AboutPage: FC<{}> = () => {
  useEffect(() => {
    document.title = 'About Me | Zoltán Völcsey';
  }, []);

  return (
    <>
      <h1>About Me</h1>
      <ul className={styles.items}>
        <li className={styles.item}>
          <h2 className={`${styles.question} ${styles.left}`}>Who am I?</h2>
          <div className={styles.container}>
            <div
              className={`${styles['speech-bubble']} ${styles['left-speech-bubble']}`}
            >
              <p>Hello, my friend!</p>
              <p> My name is Zoltán Völcsey.</p>
              <p>
                I am a full stack web developer, who is based in Győr, Hungary.
              </p>
            </div>
            <div
              className={`${styles['profile-picture']} ${styles['left-profile-picture']}`}
            ></div>
          </div>
        </li>
        <li className={styles.item}>
          <h2 className={`${styles.question} ${styles.right}`}>
            Why did I choose web development?
          </h2>
          <div className={styles.container}>
            <div
              className={`${styles['speech-bubble']} ${styles['right-speech-bubble']}`}
            >
              <p>
                After many trying and many failures the programming seems like a
                good choice. Important part of the future. The web is a good
                start. Design a page and understand what is under the hood, so I
                chose the full stack development.
              </p>
            </div>
            <div
              className={`${styles['profile-picture']} ${styles['right-profile-picture']}`}
            ></div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default AboutPage;
