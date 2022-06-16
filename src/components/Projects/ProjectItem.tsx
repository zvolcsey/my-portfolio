import { FC } from 'react';

import styles from './ProjectItem.module.css';
import TechnologiesList from '../Technologies/TechnologiesList';
import Badge from '../Badge/Badge';
import ProjectItemActions from './ProjectItemActions';

import type { Project } from '../../app/types';

const ProjectItem: FC<{
  data: Project;
}> = (props) => {
  const { data } = props;
  const {
    category,
    title,
    technologies,
    seeOnGitHubLink,
    seeOnCodePenLink,
    tryItLink,
  } = data;

  return (
    <li className={styles.item}>
      <header>
        <Badge className={styles.badge}>{category}</Badge>
      </header>
      <div className={styles.content}>
        <h3>{title}</h3>
        <TechnologiesList
          items={technologies}
          className={styles['technologies-list']}
        />
      </div>
      <footer>
        <ProjectItemActions
          actions={[seeOnGitHubLink, seeOnCodePenLink, tryItLink]}
        />
      </footer>
    </li>
  );
};

export default ProjectItem;
