import {Project, PROJECTS, ProjectStyleType} from "../components/_models/project.model";
import {ProjectCard} from "../components/projects/project-card";
import {useState} from "react";
import {WatcherState} from "../components/_models/watcher.model";

export default function Projects(watcherState: WatcherState) {
  const [projectCards, setProjectCards] = useState<Project[]>(Array.from(PROJECTS.values()));

  const handleMouseLeave = () => {
    watcherState.setWatcherActivated(false);

    const newProjectCards: Project[] = [];
    projectCards.map(project => {
      newProjectCards.push({...project, style: null})
    })

    setProjectCards(newProjectCards);
  }
  const handleMouseEnter = (index: number) => {
    watcherState.setWatcherActivated(true);

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
    <section>
      <h2 className="numbered-heading"><span>03.</span>Personal Projects</h2>
      <div className="inner experience">
        <section style={{ marginTop: "50px" }}>
          {projectCards.map((project, index) => (
            <ProjectCard key={project.title}
                         project={project}
                         inverse={(index % 2 === 0)}
                         styleClass={project.style}
                         handleMouseEnter={() => handleMouseEnter(index)}
                         handleMouseLeave={() => handleMouseLeave()}
            />
          ))}
        </section>
      </div>
    </section>
  );
}
