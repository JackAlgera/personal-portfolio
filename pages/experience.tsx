import {ExperienceTab} from "../components/experience/experience-tab";
import {useState} from "react";
import {EXPERIENCE_TABS, ExperienceTabEntity} from "../components/models/tabs.model";
import {WatcherState} from "../components/models/watcher.model";

export default function Experience(watcherState: WatcherState) {
  const [tab, setTab] = useState<ExperienceTabEntity>(EXPERIENCE_TABS.get('blablacar'));
  const [key, setKey] = useState(Math.random());

  const changeTab = (tab: string) => {
    setTab(EXPERIENCE_TABS.get(tab));
    setKey(Math.random());
  }

  const generateButton = (company: string, key: string) => {
    return (
      <button onClick={() => changeTab(key)}
              onMouseEnter={() => watcherState.setWatcherActivated(true)}
              onMouseLeave={() => watcherState.setWatcherActivated(false)}
              className={tab.company === company ? 'activated' : ''}
              key={company}
      >{company}</button>
    );
  }

  return (
    <section>
      <h2 className="numbered-heading">Experience</h2>
      <div className="inner experience">
        <div className="horizontal-tab-list">
          { Array.from(EXPERIENCE_TABS.keys())
            .map(company => generateButton(EXPERIENCE_TABS.get(company).company, company))
          }
        </div>
        <ExperienceTab watcherActivated={watcherState.watcherActivated}
                       setWatcherActivated={watcherState.setWatcherActivated}
                       tab={tab}
                       key={key}
        />
      </div>
    </section>
  );
}
