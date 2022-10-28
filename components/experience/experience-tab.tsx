import {ExperienceTabEntity} from "../models/tabs.model";
import {useEffect, useState} from "react";
import {WatcherState} from "../models/watcher.model";

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
      <pre>
        <p>
          <span className={"color-1"}>{"<Job "}</span>
          <span className={"color-2"}>{"company=\""}</span>
          <a onMouseEnter={() => props.setWatcherActivated(true)}
             onMouseLeave={() => props.setWatcherActivated(false)}
             className={"color-1"}
             href={props.tab.url}
          >{props.tab.company}</a>
          <span className={"color-2"}>{"\""}</span>
        </p>
        <p>
          <span className={"color-2"}>{"     position=\""}</span>
          <span className={"color-1"}>{props.tab.position}</span>
          <span className={"color-2"}>{"\""}</span>
        </p>
        <p>
          <span className={"color-2"}>{"     location=\""}</span>
          <span className={"color-1"}>{props.tab.location}</span>
          <span className={"color-2"}>{"\""}</span>
        </p>
        <p>
          <span className={"color-2"}>{"     from=\""}</span>
          <span className={"color-1"}>{props.tab.from}</span>
          <span className={"color-2"}>{"\""}</span>

          <span className={"color-2"}>{" to=\""}</span>
          <span className={"color-1"}>{props.tab.to}</span>
          <span className={"color-2"}>{"\""}</span>
          <span className={"color-1"}>{">"}</span>
        </p>
        <p/>
        {lines && lines.map((line, index) => (
          <p className="color-3" key={'tab-' + index}>{line.trim()}</p>
        ))}
        <p/>
        <p><span className={"color-1"}>{"</Job>"}</span></p>
      </pre>
    </div>
  );
}
