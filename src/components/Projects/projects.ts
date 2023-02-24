import type { Project } from '../../app/types';

const projects: Project[] = [
  {
    id: '1',
    category: 'Full Stack Web',
    title: 'Medium.com clone',
    technologies: [
      'TypeScript',
      'React',
      'CSS Modules',
      'Redux Toolkit',
      'NodeJS',
      'ExpressJS',
      'PostgreSQL',
    ],
    tryItLink: 'https://zvolcsey-conduit-fullstack.onrender.com',
    seeOnGitHubLink: 'https://github.com/zvolcsey/realworld-implementation',
  },
  {
    id: '2',
    category: 'Frontend Web',
    title: 'Battleship Game',
    technologies: [
      'TypeScript',
      'React',
      'CSS Modules',
      'Redux Toolkit',
      'Chakra UI',
    ],
    tryItLink: undefined,
    seeOnGitHubLink: 'https://github.com/zvolcsey/battleship-game',
  },
];

export default projects;
