import {ExperienceTab} from "../components/experience/experience-tab";
import {useState} from "react";
import {EXPERIENCE_TABS, ExperienceTabEntity} from "../components/models/tabs.model";
import {WatcherState} from "../components/models/watcher.model";

export default function Experience(watcherState: WatcherState) {
  const [tab, setTab] = useState<ExperienceTabEntity>(EXPERIENCE_TABS.get('blablacar'));

  const changeTab = (tab: string) => {
    setTab(EXPERIENCE_TABS.get(tab));
  }

  const generateButton = (company: string, key: string) => {
    return (
      <button onClick={() => changeTab(key)}
              onMouseEnter={() => watcherState.setWatcherActivated(true)}
              onMouseLeave={() => watcherState.setWatcherActivated(false)}
      >{company}</button>
    );
  }

  return (
    <section>
      <h2 className="numbered-heading">Experience</h2>
      <div className="inner experience">
        <div className="horizontal-tab-list">
          {generateButton('BlaBlaCar', 'blablacar')}
          {generateButton('Zalando', 'zalando')}
          {generateButton('Airbus', 'airbus')}
          {generateButton('Amazon', 'amazon')}
          {generateButton('Femto-ST', 'femto-st')}
        </div>
        <ExperienceTab tab={tab}/>
      </div>
    </section>
  );
}
