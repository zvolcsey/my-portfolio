import { FC, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './ProjectsPage.module.css';
import Container from '../components/UI/Container';
import ProjectsList from '../components/Projects/ProjectsList';
import projects from '../components/Projects/projects';
import ExternalLink from '../components/UI/ExternalLink';
import Divide from '../components/UI/Divide';

const ProjectsPage: FC<Record<string, never>> = () => {

  useEffect(() => {
    document.title = 'My Projects | Zoltán Völcsey';
  }, []);

  return (
    <>
      <Container className={styles.container}>
        <h2 className={styles['projects-title']}>My deployed projects</h2>
        <ProjectsList items={projects} />
      </Container>
      <Divide text="OR" className={styles.divide} />
      <Container className={styles.container}>
        <h2>See my other projects</h2>
        <ul className={styles['other-projects']}>
          <li className={styles.item}>
            <ExternalLink href={'https://github.com/zvolcsey'}>
              <FontAwesomeIcon icon={faGithub} />
              &nbsp;GitHub
            </ExternalLink>
          </li>
          <li className={styles.item}>
            <ExternalLink href="https://codepen.io/zoltanv">
              <FontAwesomeIcon icon={faCodepen} />
              &nbsp;CodePen
            </ExternalLink>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default ProjectsPage;
