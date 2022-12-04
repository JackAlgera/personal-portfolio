import {Watcher} from "./watcher";
import {WatcherState} from "../_models/watcher.model";
import styles from "./navbar.module.scss";
import {StatefulLink} from "../_utils/stateful-link";

export const Navbar = (watcherState: WatcherState) => {
  return (
    <div className={styles.nav}>
      <div className={styles.navPos}>
        <StatefulLink content="About me" href={"/"} watcherState={watcherState} />
        <StatefulLink content="Experience" href={"/experience"} watcherState={watcherState} />
      </div>
      <Watcher watcherState={ watcherState } />
      <div className={styles.navPos}>
        <StatefulLink content="Projects" href={"/projects"} watcherState={watcherState} />
        <StatefulLink content="Contact" href={"/contact"} watcherState={watcherState} />
      </div>
    </div>
  );
};
