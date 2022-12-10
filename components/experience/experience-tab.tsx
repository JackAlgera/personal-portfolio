import {ExperienceTabEntity} from "../_models/tabs.model";
import {useEffect, useState} from "react";
import {WatcherState} from "../_models/watcher.model";
import {CodeText} from "../_utils/code-text";
import styles from "./experience-tab.module.scss";
import {StatefulLink} from "../_utils/stateful-link";

const PARAGRAPH_TYPEWRITER_LETTER_DELAY = 35;
const MAIN_TYPEWRITER_LETTER_DELAY = 100;

interface ExperienceTabProps {
  tab: ExperienceTabEntity;
  watcherState: WatcherState;
}

export const ExperienceTab = (props: ExperienceTabProps) => {
  const [lines, setLines] = useState([]);

  const extractLines = (description: string, maxLetters: number) : string[] => {
    let lines = [];
    description.split('\n')
      .map((line) => {
        let words = line.trim().split(' ');
        let paragraphLines = [];
        let newLine = '';

        words.forEach(word => {
          if (newLine.length + word.length > maxLetters) {
            paragraphLines.push(newLine);
            newLine = word;
          } else {
            newLine += ' ' + word;
          }
        })

        paragraphLines.push(newLine);
        paragraphLines.map(line => lines.push(line));
      });

    return lines;
  }

  useEffect(() => {
    setLines(extractLines(props.tab.description, 60));
  }, [props.tab.description]);

  return (
    <div className={styles.experienceTab}>
      <pre id={styles.experienceTabTextArea}>
        {/* import * as experience from "jack/experience"; */}
        <div className={styles.experienceTabLine}>
          <p>
            <span className={styles.color2}>import </span>
            <span className={styles.color1}>* </span>
            <span className={styles.color2}>as </span>
            <span className={styles.color3}>experience</span>
            <span className={styles.color2}> from </span>
            <span className={styles.color2}>{"\""}</span>
            <span className={styles.color3}>jack/experience</span>
            <span className={styles.color2}>{"\""}</span>
            <span className={styles.color2}>;</span>
          </p>
        </div>
        <div className={styles.experienceTabLine}><p>{"\n"}</p></div>

        {/* <Job company= */}
        <div className={styles.experienceTabLine}>
          <p>
            <span className={styles.color1}>{"<Job "}</span>
            <span className={styles.color2}>{"company=\""}</span>
            <StatefulLink
              href={props.tab.url}
              content={<CodeText typeDelay={MAIN_TYPEWRITER_LETTER_DELAY} stopTyping={true} color={styles.color1} text={props.tab.company} />}
              watcherState={props.watcherState} />
            <span className={styles.color2}>{"\""}</span>
          </p>
        </div>

        {/* position="" */}
        <div className={styles.experienceTabLine}>
          <p>
            <span className={styles.color2}>{"     position=\""}</span>
            <CodeText typeDelay={MAIN_TYPEWRITER_LETTER_DELAY} stopTyping={true} color={styles.color1} text={props.tab.position} />
            <span className={styles.color2}>{"\""}</span>
          </p>
        </div>

        {/* location="" */}
        <div className={styles.experienceTabLine}>
          <p>
            <span className={styles.color2}>{"     location=\""}</span>
            <CodeText typeDelay={MAIN_TYPEWRITER_LETTER_DELAY} stopTyping={true} color={styles.color1} text={props.tab.location} />
            <span className={styles.color2}>{"\""}</span>
          </p>
        </div>

        {/* from="" to""> */}
        <div className={styles.experienceTabLine}>
          <p>
            <span className={styles.color2}>{"     from=\""}</span>
            <CodeText typeDelay={MAIN_TYPEWRITER_LETTER_DELAY} stopTyping={true} color={styles.color1} text={props.tab.from} />
            <span className={styles.color2}>{"\""}</span>

            <span className={styles.color2}>{" to=\""}</span>
            <CodeText typeDelay={MAIN_TYPEWRITER_LETTER_DELAY} stopTyping={true} color={styles.color1} text={props.tab.to} />
            <span className={styles.color2}>{"\""}</span>
            <span className={styles.color1}>{">"}</span>
          </p>
        </div>
        <div className={styles.experienceTabLine}><p>{"\n"}</p></div>

        {/* Description */}
        {lines && lines.map((line, index) => (
          <div className={styles.experienceTabLine} key={'tab-' + index}>
            <p className={`${styles.color3} ${styles.justified}`}>
              <CodeText
                typeDelay={PARAGRAPH_TYPEWRITER_LETTER_DELAY}
                stopTyping={index !== lines.length - 1}
                color={styles.color3}
                text={line.trim()} />
            </p>
          </div>
        ))}
        <div className={styles.experienceTabLine}><p>{"\n"}</p></div>

        {/* </Job> */}
        <div className={styles.experienceTabLine}>
          <p><span className={styles.color1}>{"</Job>"}</span></p>
        </div>
        <div className={styles.experienceTabLine}><p>{"\n"}</p></div>
      </pre>
    </div>
  );
}
