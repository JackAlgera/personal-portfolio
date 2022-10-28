import {ExperienceTabEntity} from "../models/tabs.model";
import {useEffect, useState} from "react";
import {WatcherState} from "../models/watcher.model";
import {CodeText} from "../utils/code-text";
import styles from "./experience-tab.module.scss";

interface ExperienceTabProps {
  tab: ExperienceTabEntity;
}

export const ExperienceTab = (props: ExperienceTabProps & WatcherState) => {
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
    <div className="experience-tab">
      <pre id={styles.experienceTabTextArea}>
        <p>
          <span className={styles.color1}>{"<Job "}</span>
          <span className={styles.color2}>{"company=\""}</span>
          <a onMouseEnter={() => props.setWatcherActivated(true)}
             onMouseLeave={() => props.setWatcherActivated(false)}
             className={styles.color1}
             href={props.tab.url}
          ><CodeText stopTyping={true} color={styles.color1} text={props.tab.company} /></a>
          <span className={styles.color2}>{"\""}</span>
        </p>
        <p>
          <span className={styles.color2}>{"     position=\""}</span>
          <CodeText stopTyping={true} color={styles.color1} text={props.tab.position} />
          <span className={styles.color2}>{"\""}</span>
        </p>
        <p>
          <span className={styles.color2}>{"     location=\""}</span>
          <CodeText stopTyping={true} color={styles.color1} text={props.tab.location} />
          <span className={styles.color2}>{"\""}</span>
        </p>
        <p>
          <span className={styles.color2}>{"     from=\""}</span>
          <CodeText stopTyping={true} color={styles.color1} text={props.tab.from} />
          <span className={styles.color2}>{"\""}</span>

          <span className={styles.color2}>{" to=\""}</span>
          <CodeText stopTyping={true} color={styles.color1} text={props.tab.to} />
          <span className={styles.color2}>{"\""}</span>
          <span className={styles.color1}>{">"}</span>
        </p>
        <p/>
        {lines && lines.map((line, index) => (
          <p className={styles.color3} key={'tab-' + index}><CodeText stopTyping={index !== lines.length - 1} color={styles.color3} text={line.trim()} /></p>
        ))}
        <p/>
        <p><span className={styles.color1}>{"</Job>"}</span></p>
      </pre>
    </div>
  );
}
