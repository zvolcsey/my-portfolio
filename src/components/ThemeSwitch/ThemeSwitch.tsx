import { useState } from 'react';

import '../../index.css';
import styles from './ThemeSwitch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function ThemeSwitch() {
  const [themeChecked, setThemeChecked] = useState(true);

  const toggleThemeCheckedHandler = () => {
    setThemeChecked((prevState) => !prevState);
  };
  const sliderStyles = [styles.slider];
  const switchStyles = [styles.switch];
  const darkIconStyles = [styles.icon];
  const lightIconStyles = [styles.icon, styles.activeIcon];
  if (themeChecked) {
    sliderStyles.push(styles.activeSlider);
    switchStyles.push(styles.activeSwitch);
    darkIconStyles.push(styles.activeIcon);
    lightIconStyles.pop();
  }

  return (
    <form action="">
      <fieldset className={styles.fieldset}>
        <legend className="sr-only">You can change the theme here</legend>
        <FontAwesomeIcon
          icon={faSun}
          className={lightIconStyles.join(' ')}
        ></FontAwesomeIcon>
        <label
          htmlFor="theme"
          className={switchStyles.join(' ')}
          onClick={toggleThemeCheckedHandler}
        >
          <input
            id={'theme-switch'}
            type="checkbox"
            name="theme"
            checked={themeChecked}
            onChange={toggleThemeCheckedHandler}
          />
          <span className={sliderStyles.join(' ')}></span>
        </label>
        <FontAwesomeIcon
          icon={faMoon}
          className={darkIconStyles.join(' ')}
        ></FontAwesomeIcon>
      </fieldset>
    </form>
  );
}
