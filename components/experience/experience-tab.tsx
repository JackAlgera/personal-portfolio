import {ExperienceTabEntity} from "../models/tabs.model";
import {useEffect, useState} from "react";

interface ExperienceTabProps {
  tab: ExperienceTabEntity;
}

export const ExperienceTab = (props: ExperienceTabProps) => {
  const [lines, setLines] = useState([]);

  const extractLines = (description: string, maxLetters: number) : string[] => {
    let lines = [];
    description.split('\n')
      .map((line) => {
        let words = line.split(' ');
        let newParagrapheLines = [];
        while (words.length != 0) {
          let newLine = '';
          while (words.length != 0 && newLine.length < maxLetters) {
            newLine = words.pop() + ' ' + newLine;
          }
          newParagrapheLines.push(newLine);
        }

        newParagrapheLines.reverse().map(line => lines.push(line));
      });

    return lines;
  }

  useEffect(() => {
    setLines(extractLines(props.tab.description, 40));
  }, [props.tab.description]);


  return (
    <div className="experience-tab">
      <pre>
        <p><span className={"color-1"}>{"<Job "}</span><span className={"color-2"}>{"company=\""}</span><span className={"color-1"}>{props.tab.company}</span><span className={"color-2"}>{"\""}</span></p>
        <p><span className={"color-2"}>{"     location=\""}</span><span className={"color-1"}>{props.tab.location}</span><span className={"color-2"}>{"\""}</span></p>
        <p>
          <span className={"color-2"}>{"     from=\""}</span><span className={"color-1"}>{props.tab.from}</span><span className={"color-2"}>{"\""}</span>
          <span className={"color-2"}>{" to=\""}</span><span className={"color-1"}>{props.tab.to}</span><span className={"color-2"}>{"\""}</span><span className={"color-1"}>{" />"}</span>
        </p>
        <p/>
        {lines && lines.map((line, index) => (
          <p className="color-3" key={'tab-' + index}>{line.trim()}</p>
        ))}
        <p/>
        <p><span className={"color-1"}>{"<Job />"}</span></p>
      </pre>
    </div>
  );
}
