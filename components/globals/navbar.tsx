import Link from "next/link";
import {Watcher} from "./watcher";
import {WatcherState} from "../_models/watcher.model";
import styles from "./navbar.module.scss";

export const Navbar = (watcherState: WatcherState) => {
  const generateNavLink = (title: string, href: string) => {
    return (
      <Link href={href}>
        <a onMouseEnter={() => watcherState.setWatcherActivated(true)}
           onMouseLeave={() => watcherState.setWatcherActivated(false)}
        >{title}</a>
      </Link>
    );
  }

  return (
    <div className={styles.nav}>
      <div className={styles.navPos}>
        {generateNavLink("About Me", "/")}
        {generateNavLink("Experience", "/experience")}
      </div>
      <Watcher watcherState={ watcherState } />
      <div className={styles.navPos}>
        {generateNavLink("Projects", "/projects")}
        {generateNavLink("Contact", "/contact")}
      </div>
    </div>
  );
};
