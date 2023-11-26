import {Watcher} from './watcher';
import styles from "./navbar.module.scss";
import {StatefulLink} from '../stateful/stateful-link';
import {useEffect} from 'react';

export interface NavbarProps {
  onDoneLoading: () => void;
}

export const Navbar = (props: NavbarProps) => {
  useEffect(() => {
    const timeout = setTimeout(props.onDoneLoading, 2350);
    return () => clearTimeout(timeout)
  }, []);

  return (
    <div className={styles.nav}>
      <div className={`${styles.navPos} ${styles.navLeft}`}>
        <StatefulLink href={"/"} ><span>About me</span></StatefulLink>
        <StatefulLink href={"/experience"} ><span>Experience</span></StatefulLink>
      </div>
      <Watcher />
      <div className={`${styles.navPos} ${styles.navRight}`}>
        <StatefulLink href={"/projects"} ><span>Projects</span></StatefulLink>
        <StatefulLink href={"/contact"} ><span>Contact</span></StatefulLink>
      </div>
    </div>
  );
};
