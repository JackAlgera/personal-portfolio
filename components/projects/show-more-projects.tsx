import {useEffect, useState} from "react";
import {Project, PROJECTS} from "../_models/project.model";
import styles from "./show-more-projects.module.scss";
import {ProjectImage} from "./project-image";

const MORE_PROJECTS_SENTENCES = [
  'Hey you, yes you, check out these other projects !',
  'Projects, projects and more projects !'
];

export const ShowMoreProjects = () => {
  const [sentence, setSentence] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    let randomProjects = Array.from(PROJECTS.values()).sort(() => 0.5 - Math.random()).slice(0, 2);
    setProjects(randomProjects);
    setSentence(MORE_PROJECTS_SENTENCES[Math.floor(Math.random() * MORE_PROJECTS_SENTENCES.length)]);
  }, []);

  return (
    <section>
      <div className={styles.container}>
        <h2>{sentence}</h2>
        <div className={styles.imagesContainer}>
          {projects.map(project => (
            <div key={project.title}>
              <ProjectImage handleMouseEnter={() => {}} handleMouseLeave={() => {}} project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
