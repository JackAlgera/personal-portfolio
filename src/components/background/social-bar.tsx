import { FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";
import styles from "./social-bar.module.scss";
import {StatefulLink} from '../navigation/stateful-link';

export const SocialBar = () => {
  return (
    <>
      <div className={`${styles.verticalBar} ${styles.left}`}>
        <div className={styles.bar}/>
        <StatefulLink externalLink={true} href="https://github.com/JackAlgera" ><FaGithub /></StatefulLink>
        <StatefulLink externalLink={true} href="https://www.linkedin.com/in/jacobus-algera/" ><FaLinkedin /></StatefulLink>
        <StatefulLink externalLink={true} href="https://www.codingame.com/profile/d46b2b9844dbd087e3f67033c06dd47a9043511" ><FaLaptopCode /></StatefulLink>
        <div className={styles.bar}/>
      </div>
      <div className={`${styles.verticalBar} ${styles.right}`}>
        <div className={styles.bar}/>
        <StatefulLink externalLink={true} href="mailto:jack.algera@live.com" ><span>jack.algera@live.com</span></StatefulLink>
        <div className={styles.bar}/>
      </div>
    </>
  );
};
