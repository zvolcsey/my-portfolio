import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faEye } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './ProjectItemActions.module.css';
import ExternalLink from '../UI/ExternalLink';

const ProjectItemActions: FC<{ actions: (string | undefined)[] }> = (props) => {
  const { actions } = props;
  const [seeOnGitHubLink, seeOnCodePenLink, tryItLink] = actions;

  return (
    <ul className={styles.actions}>
      {seeOnGitHubLink && (
        <li className={styles.action}>
          <ExternalLink href={seeOnGitHubLink}>
            &nbsp;See&nbsp;On&nbsp;
            <FontAwesomeIcon icon={faGithub} />
            &nbsp;GitHub&nbsp;
          </ExternalLink>
        </li>
      )}
      {seeOnCodePenLink && (
        <li className={styles.action}>
          <ExternalLink href={seeOnCodePenLink}>
            <FontAwesomeIcon icon={faEye} />
            &nbsp;See&nbsp;On&nbsp;
            <FontAwesomeIcon icon={faCodepen} />
            &nbsp;CodePen&nbsp;
          </ExternalLink>
        </li>
      )}
      {tryItLink && (
        <li className={styles.action}>
          <ExternalLink href={tryItLink}>
            Let&apos;s&nbsp;Try&nbsp;It&nbsp;
            <FontAwesomeIcon icon={faArrowRightLong} />
          </ExternalLink>
        </li>
      )}
    </ul>
  );
};

export default ProjectItemActions;
