import {WatcherState} from "../_models/watcher.model";
import styles from "./stateful-link.module.scss";

interface StatefulLinkProps {
  href: string;
  content;
  watcherState: WatcherState;
}

export const StatefulLink = (props: StatefulLinkProps) => {
  return (
    <a className={styles.link}
       onMouseEnter={() => props.watcherState.setWatcherActivated(true)}
       onMouseLeave={() => props.watcherState.setWatcherActivated(false)}
       href={props.href}
       target="_blank"
       rel="noreferrer"
    >{props.content}</a>
  );
}
