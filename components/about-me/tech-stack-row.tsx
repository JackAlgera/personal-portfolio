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
        {props.icons.map((techStack, index) => (
          <StatefulLink
            key={techStack.name + '-' + index}
            href={techStack.url}
            content={<Image alt={techStack.name} src={techStack.icon} layout="fill" />}
            watcherState={props.watcherState} />
        ))}
      </div>
    </div>
  );
}
