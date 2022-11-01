import {useEffect, useState} from "react";
import {Project, PROJECTS} from "../_models/project.model";
import styles from "./show-more-projects.module.scss";
import {ProjectImage} from "./project-image";

export const ShowMoreProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    let randomProjects = Array.from(PROJECTS.values()).sort(() => 0.5 - Math.random()).slice(0, 2);
    setProjects(randomProjects);
  }, []);

  return (
    <div className={styles.container}>
      <h2>Psst, check out these other gucci projects</h2>
      <div className={styles.imagesContainer}>
        {projects.map(project => (
          <ProjectImage
            key={project.title}
            project={project} />
        ))}
      </div>
    </div>
  );
}
