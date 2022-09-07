import { FC, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faCodepen,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import styles from './AboutPage.module.css';
import ExternalLink from '../components/UI/ExternalLink';
import Container from '../components/UI/Container';
import QandAItems from '../components/QandA/QandAItems';
import Answer from '../components/QandA/Answer';
import QandAItem from '../components/QandA/QandAItem';

const AboutPage: FC<{}> = () => {
  useEffect(() => {
    document.title = 'About Me | Zoltán Völcsey';
  }, []);

  return (
    <Container className={styles.container}>
      <h2>Introduction</h2>
      <QandAItems>
        <QandAItem>
          <h3 className={styles.question}>Who am I?</h3>
          <Answer>
            <p>
              Hello! I am Zoltán Völcsey a junior full stack web developer with
              experience to build web apps from design to backend.
            </p>
            <p>I live in Hungary.</p>
          </Answer>
        </QandAItem>
        <QandAItem>
          <h3 className={styles.question}>
            What aspects am I most passionate about?
          </h3>
          <Answer speechBubblePosition="left" profilePosition="left">
            <p>
              I am passionate to create something that people enjoy using and
              solves their problems. I like web development, because it allows
              me to learn new things constantly.
            </p>
          </Answer>
        </QandAItem>
        <QandAItem>
          <h3 className={styles.question}>
            What was my biggest professional and personal accomplishment?
          </h3>
          <Answer>
            <p>
              I am a self-taught web developer whose learning efforts culminated
              in building a full stack
              <ExternalLink href="https://zvolcsey-conduit-fullstack.onrender.com">
                Medium.com&nbsp;clone
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </ExternalLink>{' '}
              project.
            </p>
            <p>
              You can also check out smaller projects on my{' '}
              <ExternalLink
                href="https://github.com/zvolcsey"
                className={styles.link}
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </ExternalLink>{' '}
              and{' '}
              <ExternalLink
                href="https://codepen.io/zoltanv"
                className={styles.link}
              >
                <FontAwesomeIcon icon={faCodepen} /> CodePen
              </ExternalLink>{' '}
              accounts.
            </p>
            <p>
              In my personal life I am proud of my workout and yoga routine that
              helps me support my physical and mental health.
            </p>
          </Answer>
        </QandAItem>
        <QandAItem>
          <h3 className={styles.question}>What am I looking for right now?</h3>
          <Answer speechBubblePosition="left" profilePosition="left">
            <p>
              I am looking for my first professional opportunity as a full stack
              web developer to build beautiful and secure web apps and to
              continue developing my skills with my future co-workers.
            </p>
            <p>
              I am looking for opportunities in Hungary or remote in CET time
              zone.
            </p>
            <p>
              Please contact me on
              <ExternalLink href="https://www.linkedin.com/in/zvolcsey">
                <FontAwesomeIcon icon={faLinkedin} />
                &nbsp;LinkedIn
              </ExternalLink>
              about opportunities.
            </p>
          </Answer>
        </QandAItem>
      </QandAItems>
    </Container>
  );
};

export default AboutPage;
