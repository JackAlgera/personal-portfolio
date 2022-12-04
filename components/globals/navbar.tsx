import Link from "next/link";
import {useRouter} from "next/router";
import {Watcher} from "./watcher";
import {WatcherState} from "../_models/watcher.model";
import styles from "./navbar.module.scss";

export const Navbar = (watcherState: WatcherState) => {
  const router = useRouter();
  const { locale: activeLocale, pathname, query, asPath } = router;

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
      <Watcher watcherActivated={watcherState.watcherActivated} setWatcherActivated={watcherState.setWatcherActivated}/>
      <div className={styles.navPos}>
        {generateNavLink("Projects", "/projects")}
        {generateNavLink("Say Hey", "/say-hey")}
      </div>
    </div>
  );
};
