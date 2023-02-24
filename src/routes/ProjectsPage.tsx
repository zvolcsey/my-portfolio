import { FC, useEffect } from 'react';
import styles from './ProjectsPage.module.css';
import Container from '../components/UI/Container';
import ProjectsList from '../components/Projects/ProjectsList';
import projects from '../components/Projects/projects';

const ProjectsPage: FC<Record<string, never>> = () => {
  useEffect(() => {
    document.title = 'My Projects | Zoltán Völcsey';
  }, []);

  return (
    <Container className={styles.container}>
      <h2 className={styles['projects-title']}>My Projects</h2>
      <ProjectsList items={projects} />
    </Container>
  );
};

export default ProjectsPage;
