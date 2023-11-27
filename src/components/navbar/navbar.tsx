import {Watcher} from './watcher';
import styles from "./navbar.module.scss";
import {StatefulLink} from '../stateful/stateful-link';
import {useEffect} from 'react';

export interface NavbarProps {
  onDoneLoading: () => void;
}

export const Navbar = (props: NavbarProps) => {
  useEffect(() => {
    const timeout = setTimeout(props.onDoneLoading, 2800);
    return () => clearTimeout(timeout)
  }, []);

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
      </div>
    </div>
  );
};
