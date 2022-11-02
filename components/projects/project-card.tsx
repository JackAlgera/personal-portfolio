import {Project, ProjectStyleType} from "../_models/project.model";
import styles from "./project-card.module.scss";
import {ProjectImage} from "./project-image";

interface ProjectCardProps {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  project: Project;
  inverse: boolean;
  styleClass: ProjectStyleType;
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className={`${styles.container} ${props.inverse ? styles.rowReverse : ''}`}>
      <h2 className={props.styleClass === ProjectStyleType.SELECT ? styles.rotate : ''}>
        {props.project.title}<br/>
        <span>{props.project.date}</span>
        <span>{props.project.techStack}</span>
      </h2>
      <div animation={props.project.style}>
        <ProjectImage
          project={props.project}
          handleMouseEnter={props.handleMouseEnter}
          handleMouseLeave={props.handleMouseLeave} />
      </div>
    </div>
  );
}
