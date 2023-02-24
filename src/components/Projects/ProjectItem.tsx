import { FC } from 'react';

import styles from './ProjectItem.module.css';
import Badge from '../Badge/Badge';
import ProjectItemActions from './ProjectItemActions';

import type { Project } from '../../app/types';

const ProjectItem: FC<{
  data: Project;
}> = (props) => {
  const { data } = props;
  const { category, title, seeOnGitHubLink, seeOnCodePenLink, tryItLink } =
    data;

  return (
    <li className={styles.item}>
      <header>
        <Badge className={styles.badge}>{category}</Badge>
      </header>
      <h3>{title}</h3>
      <footer>
        <ProjectItemActions
          actions={[seeOnGitHubLink, seeOnCodePenLink, tryItLink]}
        />
      </footer>
    </li>
  );
};

export default ProjectItem;
