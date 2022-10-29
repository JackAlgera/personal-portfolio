import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodingame } from "react-icons/si";
import styles from "./social-bar.module.scss";
import {WatcherState} from "../_models/watcher.model";

export const SocialBar = (watcherState: WatcherState) => {
  const generateLink = (href: string, content) => {
    return (
      <a onMouseEnter={() => watcherState.setWatcherActivated(true)}
         onMouseLeave={() => watcherState.setWatcherActivated(false)}
         href={href}>{content}</a>
    );
  }

  return (
    <>
      <div className={styles.verticalBar}>
        <div className={styles.bar}/>
        {generateLink("https://github.com/JackAlgera", <FaGithub />)}
        {generateLink("https://www.linkedin.com/in/jacobus-algera/", <FaLinkedin />)}
        {generateLink("https://www.codingame.com/profile/d46b2b9844dbd087e3f67033c06dd47a9043511", <SiCodingame />)}
        <div className={styles.bar}/>
      </div>
      <div className={styles.verticalBar}>
        <div className={styles.bar}/>
        {generateLink("mailto:jack.algera@live.com", <p>jack.algera@live.com</p>)}
        <div className={styles.bar}/>
      </div>
    </>
  );
};
