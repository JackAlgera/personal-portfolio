import styles from "./contact.module.scss";
import {WatcherState} from "../components/_models/watcher.model";
import {FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {StatefulLink} from "../components/_utils/stateful-link";

export default function Contact(watcherState: WatcherState) {
  return (
    <section>
      <h2 className="numbered-heading"><span>05.</span>Contact</h2>
      <div className={styles.container}>
        <p>Feel free to get in touch with me on these platforms</p>
        <div className={styles.iconsContainer}>
          <StatefulLink content={<HiOutlineMail/>} href="mailto:jack.algera@live.com" watcherState={watcherState} />
          <StatefulLink content={<FaLinkedin />} href="https://www.linkedin.com/in/jacobus-algera/" watcherState={watcherState} />
        </div>
        {/*<p>If you’ve made it this far, you might as well stay a little bit longer and enjoy the little game:</p>*/}
      </div>
    </section>
  );
}
