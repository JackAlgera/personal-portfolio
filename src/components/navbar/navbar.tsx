import {Watcher} from './watcher';
import styles from "./navbar.module.scss";
import {StatefulLink} from '../navigation/stateful-link';

export const Navbar = () => {
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
