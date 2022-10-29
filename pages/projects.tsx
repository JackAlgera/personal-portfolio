import {Project, ProjectStyleType} from "../components/_models/project.model";
import {ProjectCard} from "../components/projects/project-card";
import project1 from "../public/project1.png";
import project2 from "../public/project2.png";
import project3 from "../public/project3.png";
import project4 from "../public/project4.png";
import {useState} from "react";

export default function Projects() {
  const [projectCards, setProjectCards] = useState<Project[]>([
    { title: "Project 01", description: "This project took a while to do, and is really awesome and sick", image: project1, style: ProjectStyleType.SELECT },
    { title: "Project 02", description: "I'm typing some random texts so that I can test out this rad cool new effect", image: project2, style: ProjectStyleType.UP },
    { title: "Project 03", description: "Something cool", image: project3, style: ProjectStyleType.DOWN },
    { title: "Project 04", description: "Something cool", image: project4, style: null },
  ]);

  const handleMouseLeave = () => {
    const newProjectCards: Project[] = [];
    projectCards.map(project => {
      newProjectCards.push({...project, style: null})
    })

    setProjectCards(newProjectCards);
  }
  const handleMouseEnter = (index: number) => {
    const newProjectCards: Project[] = [];
    projectCards.map((project, projectIndex) => {
      switch (projectIndex) {
        case index:
          newProjectCards.push({...project, style: ProjectStyleType.SELECT})
          break;
        case (index - 1):
          newProjectCards.push({...project, style: ProjectStyleType.UP})
          break;
        case (index + 1):
          newProjectCards.push({...project, style: ProjectStyleType.DOWN})
          break;
        default:
          newProjectCards.push({...project, style: null})
          break;
      }
    })

    setProjectCards(newProjectCards);
  }

  return (
    <section>
      <h2 className="numbered-heading">Projects</h2>
      <div className="inner experience">
        <section style={{ marginTop: "20px" }}>
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
