import styles from "./tech-stack.module.scss";
import Image from "next/image";
import {TechStack} from "../_models/about_me.model";
import {WatcherState} from "../_models/watcher.model";

interface TechStackProps {
  label: string;
  icons: Array<TechStack>;
  watcherState: WatcherState;
}

export const TechStackRow = (props: TechStackProps) => {
  return (
    <div className={styles.container}>
      <p>{props.label}</p>
      <div className={styles.techStackContainer}>
        {props.icons.map((icon, index) => (
          <a key={'tech-stack-' + index} href={icon.url}
             onMouseEnter={() => props.watcherState.setWatcherActivated(true)}
             onMouseLeave={() => props.watcherState.setWatcherActivated(false)}
             target="_blank"
             rel="noreferrer"
          >
            <Image key="react" alt="react" src={icon.icon.src} layout="fill"/>
          </a>
        ))}
      </div>
    </div>
  );
}
