'use client';

import {useState} from 'react';
import {EXPERIENCE_TABS, ExperienceTabEntity} from '../../../components/_models/tabs.model';
import {StatefulButton} from '../../components/stateful/stateful-button';
import {ExperienceTab} from './experience-tab';

export default function Page() {
  const [tab, setTab] = useState<ExperienceTabEntity>(EXPERIENCE_TABS.get('blablacar')!);
  const [key, setKey] = useState(Math.random());

  const changeTab = (tab: string) => {
    setTab(EXPERIENCE_TABS.get(tab)!);
    setKey(Math.random());
  }

  return (
    <>
      <h2 className="numbered-heading"><span>03.</span>Experience</h2>
      <section>
        <div className={'flex gap-14'}>
          <div className={'flex-col'}>
            { Array.from(EXPERIENCE_TABS.keys()).map(company =>
              <StatefulButton
                key={company}
                activated={tab.company.toLowerCase() === company}
                onClick={() => changeTab(company)}>
                {EXPERIENCE_TABS.get(company)!.company}
              </StatefulButton>)
            }
          </div>
          <ExperienceTab tab={tab} key={key} />
        </div>
      </section>
    </>
  );
}
