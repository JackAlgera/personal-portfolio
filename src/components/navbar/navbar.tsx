"use client";

import {Watcher} from './watcher';
import styles from './navbar.module.scss';
import {StatefulLink} from '../stateful/stateful-link';
import {useState} from 'react';
import {StatefulButton} from '../stateful/stateful-button';
import {publish} from '../../events/background.event';

export const Navbar = () => {
  const [disabled, setDisabled] = useState(false)

  const switchBackgrounds = () => {
    publish('switch-backgrounds');
    setDisabled(true);
    setTimeout(() => setDisabled(false), 1500);
  }

  return (
    <div className={styles.nav}>
      <div className={`${styles.navPos} ${styles.navLeft}`}>
        <StatefulLink href={"/"} internalLink={true}><span>About me</span></StatefulLink>
        <StatefulLink href={"/experience"} internalLink={true}><span>Experience</span></StatefulLink>
      </div>
      <Watcher />
      <div className={`${styles.navPos} ${styles.navRight}`}>
        <StatefulLink href={"/projects"} internalLink={true}><span>Projects</span></StatefulLink>
        <StatefulLink href={"/contact"} internalLink={true}><span>Contact</span></StatefulLink>
        <StatefulButton appearDelay={12500} disabled={disabled} activated={false} onClick={switchBackgrounds}>Press me</StatefulButton>
      </div>
    </div>
  );
};
