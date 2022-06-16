import { FC } from 'react';

import styles from './ProjectsList.module.css';
import ProjectItem from './ProjectItem';

import type { Project } from '../../app/types';

const ProjectsList: FC<{ items: Project[] }> = (props) => {
  const { items } = props;

  const projects = items.map((item) => (
    <ProjectItem key={item.id} data={item} />
  ));

  return <ul className={styles.items}>{projects}</ul>;
};

export default ProjectsList;
