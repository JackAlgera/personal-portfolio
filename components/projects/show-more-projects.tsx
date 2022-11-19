import {Project} from "../_models/project.model";
import {ProjectImage} from "./project-image";
import styles from "./show-more-projects.module.scss";

interface ShowMoreProjectsProps {
  moreProjectsSentence: string;
  moreProjects: Project[];
}

export const ShowMoreProjects = (props: ShowMoreProjectsProps) => {
  return (
    <section>
      <div className={styles.container}>
        <h2>{props.moreProjectsSentence}</h2>
        <div className={styles.imagesContainer}>
          {props.moreProjects.map(project => (
            <div key={project.title}>
              <ProjectImage handleMouseEnter={() => {}} handleMouseLeave={() => {}} project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
