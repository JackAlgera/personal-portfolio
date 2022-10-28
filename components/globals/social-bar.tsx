import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodingame } from "react-icons/si";
import styles from "./social-bar.module.scss";

export const SocialBar = () => {
  return (
    <>
      <div className={styles.verticalBar}>
        <div className={styles.bar}/>
        <a href="https://github.com/JackAlgera"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/jacobus-algera/"><FaLinkedin /></a>
        <a href="https://www.codingame.com/profile/d46b2b9844dbd087e3f67033c06dd47a9043511"><SiCodingame /></a>
        <div className={styles.bar}/>
      </div>
      <div className={styles.verticalBar}>
        <div className={styles.bar}/>
        <a href="mailto:jack.algera@live.com"><p>jack.algera@live.com</p></a>
        <div className={styles.bar}/>
      </div>
    </>
  );
};
