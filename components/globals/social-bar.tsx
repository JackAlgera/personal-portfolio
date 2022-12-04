import { FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";
import styles from "./social-bar.module.scss";
import {WatcherState} from "../_models/watcher.model";
import {StatefulLink} from "../_utils/stateful-link";

export const SocialBar = (watcherState: WatcherState) => {
  return (
    <>
      <div className={styles.verticalBar}>
        <div className={styles.bar}/>
        <StatefulLink href={"https://github.com/JackAlgera"} content={<FaGithub />} watcherState={watcherState} />
        <StatefulLink href={"https://www.linkedin.com/in/jacobus-algera/"} content={<FaLinkedin />} watcherState={watcherState} />
        <StatefulLink href={"https://www.codingame.com/profile/d46b2b9844dbd087e3f67033c06dd47a9043511"} content={<FaLaptopCode />} watcherState={watcherState} />
        <div className={styles.bar}/>
      </div>
      <div className={styles.verticalBar}>
        <div className={styles.bar}/>
        <StatefulLink href={"mailto:jack.algera@live.com"} content={<p>jack.algera@live.com</p>} watcherState={watcherState} />
        <div className={styles.bar}/>
      </div>
    </>
  );
};
