import {ExperienceTab} from "../components/experience/experience-tab";
import {useState} from "react";
import {EXPERIENCE_TABS, ExperienceTabEntity} from "../components/models/tabs.model";

export default function Experience() {
  const [tab, setTab] = useState<ExperienceTabEntity>(EXPERIENCE_TABS.get('femto-st'));

  const changeTab = (tab: string) => {
    setTab(EXPERIENCE_TABS.get(tab));
  }

  return (
    <section>
      <h2 className="numbered-heading">Experience</h2>
      <div className="inner experience">
        <div className="horizontal-tab-list">
          <button onClick={() => changeTab('blablacar')}>BlaBlaCar</button>
          <button onClick={() => changeTab('zalando')}>Zalando</button>
          <button onClick={() => changeTab('airbus')}>Airbus</button>
          <button onClick={() => changeTab('amazon')}>Amazon</button>
          <button onClick={() => changeTab('femto-st')}>Femto-ST</button>
        </div>
        <ExperienceTab tab={tab}/>
      </div>
    </section>
  );
}
