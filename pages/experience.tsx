import {ExperienceTab} from "../components/experience/experience-tab";
import {useState} from "react";
import {EXPERIENCE_TABS, ExperienceTabEntity} from "../components/_models/tabs.model";
import {WatcherState} from "../components/_models/watcher.model";
import {StatefulButton} from "../components/_utils/stateful-button";
import styles from "./experience.module.scss";

export default function Experience(watcherState: WatcherState) {
  const [tab, setTab] = useState<ExperienceTabEntity>(EXPERIENCE_TABS.get('blablacar'));
  const [key, setKey] = useState(Math.random());

  const changeTab = (tab: string) => {
    setTab(EXPERIENCE_TABS.get(tab));
    setKey(Math.random());
  }

  return (
    <>
      <h2 className="numbered-heading"><span>03.</span>Experience</h2>
      <section>
        <div className={styles.container}>
          <div className={styles.horizontalTabList}>
            { Array.from(EXPERIENCE_TABS.keys())
              .map(company => <StatefulButton
                key={company}
                content={EXPERIENCE_TABS.get(company).company}
                activated={tab.company.toLowerCase() === company}
                onClick={() => changeTab(company)}
                watcherState={watcherState} />)
            }
          </div>
          <ExperienceTab watcherState={watcherState} tab={tab} key={key} />
        </div>
      </section>
    </>
  );
}
