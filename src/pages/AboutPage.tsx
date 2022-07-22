import { FC, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
    <Container titlePosition='top' className={styles.container}>
      <h2>Introduction</h2>
      <QandAItems>
        <QandAItem>
          <h3 className={styles.question}>Who am I?</h3>
          <Answer>
            <p>
              Hello! I am Zoltán Völcsey a junior full stack web developer with
              experience to build webapps from design to backend &#40;and to the
              databases&#41;.
            </p>
          </Answer>
        </QandAItem>
        <QandAItem>
          <h3 className={styles.question}>
            What aspects am I most passionate about?
          </h3>
          <Answer speechBubblePosition='left' profilePosition='left'>
            <p>
              I am with passion to create something and to solve problems. I
              would like to learn reqularly something new. I like the lifelong
              learning.
            </p>
          </Answer>
        </QandAItem>
        <QandAItem>
          <h3 className={styles.question}>
            What was my biggest professional and personal accomplishment?
          </h3>
          <Answer>
            <p>
              With a lots of work I learned the necessary requirements of full
              stack web development and I could develop a full stack{' '}
              <ExternalLink href='https://zvolcsey-conduit-fullstack.onrender.com'>
                Medium.com&nbsp;clone
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </ExternalLink>{' '}
              project.
            </p>
            <p>
              In my personal life I could to add to my weekly routine the
              reqularly workout and yoga. As a result I can support my physical
              and mental health.
            </p>
          </Answer>
        </QandAItem>
        <QandAItem>
          <h3 className={styles.question}>What do I looking for right now?</h3>
          <Answer speechBubblePosition='left' profilePosition='left'>
            <p>
              Now I am ready to get experience in a company and to build with my
              future co-workers beatuiful and secure websites and webapps.{' '}
            </p>
            <p>
              Reach out me on
              <ExternalLink href='https://www.linkedin.com/in/zvolcsey'>
                <FontAwesomeIcon icon={faLinkedin} />
                &nbsp;LinkedIn
              </ExternalLink>
              .
            </p>
          </Answer>
        </QandAItem>
      </QandAItems>
    </Container>
  );
};

export default AboutPage;
