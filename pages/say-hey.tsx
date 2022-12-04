import styles from "./say-hey.module.scss";
import {WatcherState} from "../components/_models/watcher.model";
import {FaGithub} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {useState} from "react";
import {StatefulButton} from "../components/_utils/stateful-button";
import {StatefulLink} from "../components/_utils/stateful-link";

export default function SayHey(watcherState: WatcherState) {
  const [LIHovering, setLIHovering] = useState(false);
  const [emailClicked, setEmailClicked] = useState(false);

  const generateLink = (href: string, content) => {
    return (
      <a
        onMouseEnter={() => watcherState.setWatcherActivated(true)}
        onMouseLeave={() => watcherState.setWatcherActivated(false)}
        href={href}
        target="_blank"
        rel="noreferrer"
      >{content}</a>
    );
  }

  return (
    <section>
      <h2 className="numbered-heading"><span>05.</span>Contact-me</h2>
      <div className={styles.container}>
        <p>Feel free to get in touch with me on these platforms</p>
        <div className={styles.iconsContainer}>
          <StatefulLink content={<HiOutlineMail/>} href="mailto:jack.algera@live.com" watcherState={watcherState} />
          <StatefulLink href={"https://github.com/JackAlgera"} content={<FaGithub />} watcherState={watcherState} />
        </div>
        {/*<p>If you’ve made it this far, you might as well stay a little bit longer and enjoy the little game:</p>*/}
      </div>
    </section>
  );
}
