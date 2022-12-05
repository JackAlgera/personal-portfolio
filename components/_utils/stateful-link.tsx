import {WatcherState} from "../_models/watcher.model";
import styles from "./stateful-link.module.scss";
import Link from "next/link";

interface StatefulLinkProps {
  href?: string;
  content;
  watcherState: WatcherState;
  externalLink?: boolean;
}

export const StatefulLink = (props: StatefulLinkProps) => {
  return props.externalLink === null || props.externalLink === undefined || props.externalLink === true ?
    <a className={styles.link}
       onMouseEnter={() => props.watcherState.setWatcherActivated(true)}
       onMouseLeave={() => props.watcherState.setWatcherActivated(false)}
       href={props.href}
       target="_blank"
       rel="noreferrer"
    >{props.content}</a>
    :
    <Link href={props.href}>
      <a className={styles.link}
         onMouseEnter={() => props.watcherState.setWatcherActivated(true)}
         onMouseLeave={() => props.watcherState.setWatcherActivated(false)}
      ><span>{props.content}</span></a>
    </Link>;
}
