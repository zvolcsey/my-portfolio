import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useEffect } from 'react';
import ExternalLink from '../components/UI/ExternalLink';

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
              <p>
                {' '}
                My name is <span>Zoltán Völcsey.</span>
              </p>
              <p>
                I am a <span>full stack web developer</span>, who is based in
                Győr, Hungary.
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
        <li className={styles.item}>
          <h2 className={`${styles.question} ${styles.left}`}>
            Which programming languages do I have experience?
          </h2>
          <div className={styles.container}>
            <div
              className={`${styles['speech-bubble']} ${styles['left-speech-bubble']}`}
            >
              <p>
                My main language is <span>JavaScript</span> and I like to use{' '}
                <span>TypeScript</span> for development.
              </p>
              <p>
                I learned <span>HTML</span> and <span>CSS</span> of course.
              </p>
              <p>
                From frameworks I chose <span>React</span> at first, because it
                is the most popular. For state management I learned{' '}
                <span>Redux</span> and I like to use <span>Redux Toolkit</span>{' '}
                too.
              </p>
              <p>
                For the backend I learned <span>NodeJS</span> and{' '}
                <span>Express</span>.
              </p>
              <p>
                I learned about <span>SQL</span> and <span>NoSQL</span>{' '}
                databases. I chose <span>PostgreSQL</span> at first.
              </p>
            </div>
            <div
              className={`${styles['profile-picture']} ${styles['left-profile-picture']}`}
            ></div>
          </div>
        </li>
        <li className={styles.item}>
          <h2 className={`${styles.question} ${styles.right}`}>
            What do I learn about testing?
          </h2>
          <div className={styles.container}>
            <div
              className={`${styles['speech-bubble']} ${styles['right-speech-bubble']}`}
            >
              <p>
                I learned the basics about <span>Unit Testing</span>,{' '}
                <span>Intergration Testing</span> and <span>E2E Testing</span>.
              </p>
              <p>
                I use <span>Vitest</span> and for the React the built-in testing
                dependecies.
              </p>
            </div>
            <div
              className={`${styles['profile-picture']} ${styles['right-profile-picture']}`}
            ></div>
          </div>
        </li>
        <li className={styles.item}>
          <h2 className={`${styles.question} ${styles.left}`}>
            What did I learn yet?
          </h2>
          <div className={styles.container}>
            <div
              className={`${styles['speech-bubble']} ${styles['left-speech-bubble']}`}
            >
              <p>
                For the version control I use <span>Git and GitHub</span>.
              </p>
              <p>
                For the web development is very important the security. I
                learned about Web Security from the videos of
                <ExternalLink
                  href='https://web.stanford.edu/class/cs253'
                  className={styles.link}
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  CS 253 Web Security Course
                </ExternalLink>{' '}
                in Stanford University.
              </p>
              <p>
                I learned about <span>Webpack</span>,{' '}
                <span>TCP/IP Networking</span>, <span>Linux basics</span> and{' '}
                <span>Cloud basics</span> too.
              </p>
              <p></p>
            </div>
            <div
              className={`${styles['profile-picture']} ${styles['left-profile-picture']}`}
            ></div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default AboutPage;
