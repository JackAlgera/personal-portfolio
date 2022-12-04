import styles from "./tech-stack.module.scss";
import Image from "next/image";
import {TechStack} from "../_models/about_me.model";
import {WatcherState} from "../_models/watcher.model";
import {StatefulLink} from "../_utils/stateful-link";

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
          <StatefulLink
            key={'tech-stack-' + index}
            href={icon.url}
            externalLink={true}
            content={<Image key="react" alt="react" src={icon.icon.src} layout="fill"/>}
            watcherState={props.watcherState} />
        ))}
      </div>
    </div>
  );
}
