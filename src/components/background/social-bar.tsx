import { FaGithub, FaLinkedin, FaLaptopCode } from "react-icons/fa";
import styles from "./social-bar.module.scss";
import {StatefulLink} from '../stateful/stateful-link';

export const SocialBar = () => {
  return (
    <>
      <div className={`${styles.verticalBar} ${styles.left}`}>
        <div className={styles.bar}/>
        <StatefulLink href="https://github.com/JackAlgera">
          <FaGithub className="w-9 h-9"/>
        </StatefulLink>
        <StatefulLink href="https://www.linkedin.com/in/jacobus-algera/">
          <FaLinkedin className="w-9 h-9"/>
        </StatefulLink>
        <StatefulLink href="https://www.codingame.com/profile/d46b2b9844dbd087e3f67033c06dd47a9043511">
          <FaLaptopCode className="w-9 h-9"/>
        </StatefulLink>
        <div className={styles.bar}/>
      </div>
      <div className={`${styles.verticalBar} ${styles.right}`}>
        <div className={styles.bar}/>
        <StatefulLink href="mailto:jack.algera@live.com"><span data-orientation="vertical">jack.algera@live.com</span></StatefulLink>
        <div className={styles.bar}/>
      </div>
    </>
  );
};
