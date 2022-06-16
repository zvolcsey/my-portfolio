import { FC, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './ProjectsPage.module.css';
import ProjectsList from '../components/Projects/ProjectsList';
import projects from '../components/Projects/projects';
import ExternalLink from '../components/UI/ExternalLink';
import Divide from '../components/UI/Divide';

const ProjectsPage: FC<{}> = () => {
  useEffect(() => {
    document.title = 'My Projects | Zoltán Völcsey';
  }, []);

  return (
    <section className={styles['projects-page']}>
      <div className={styles.container}>
        <h1>My Projects</h1>
        <section className={styles.container}>
          <h2>Let's try it</h2>
          <ProjectsList items={projects} />
        </section>
        <Divide text='OR' className={styles.divide} />
        <section className={styles.container}>
          <h2>see my other projects</h2>
          <div className={styles['other-projects']}>
            <div className={styles.item}>
              <ExternalLink href={'https://github.com/zvolcsey'}>
                on&nbsp;
                <FontAwesomeIcon icon={faGithub} />
                &nbsp;GitHub
              </ExternalLink>
            </div>
            <span>AND</span>
            <div className={styles.item}>
              <ExternalLink href='https://codepen.io/zoltanv'>
                on&nbsp;
                <FontAwesomeIcon icon={faCodepen} />
                &nbsp;CodePen
              </ExternalLink>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProjectsPage;
