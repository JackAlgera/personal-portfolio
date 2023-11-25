'use client';

import {Project, PROJECTS, ProjectStyleType} from "../../models/project.model";
import {ProjectCard} from "./project-card";
import {useWatcherStore} from '../../store/watcher-store';
import {useState} from 'react';

export default function Page() {
  const { activateWatcher, deactivateWatcher } = useWatcherStore();
  const [projectCards, setProjectCards] = useState<Project[]>(Array.from(PROJECTS.values()));

  const handleMouseLeave = () => {
    deactivateWatcher();

    const newProjectCards: Project[] = [];
    projectCards.map(project => {
      newProjectCards.push({...project, style: null})
    })

    setProjectCards(newProjectCards);
  }
  const handleMouseEnter = (index: number) => {
    activateWatcher();

    const newProjectCards: Project[] = [];
    projectCards.map((project, projectIndex) => {
      if (index === projectIndex) {
        newProjectCards.push({...project, style: ProjectStyleType.SELECT})
        return;
      }
      if (index < projectIndex) {
        newProjectCards.push({...project, style: ProjectStyleType.DOWN});
        return;
      }
      newProjectCards.push({...project, style: ProjectStyleType.UP});
    })

    setProjectCards(newProjectCards);
  }

  return (
    <>
      <h2 className="numbered-heading"><span>04.</span>Personal Projects</h2>
      <section className="flex gap-8 mt-4">
        {projectCards.map((project, index) => (
          <ProjectCard key={project.title}
                       project={project}
                       inverse={(index % 2 === 0)}
                       styleClass={project.style}
                       handleMouseEnter={() => handleMouseEnter(index)}
                       handleMouseLeave={handleMouseLeave}
          />
        ))}
      </section>
    </>
  );
}
