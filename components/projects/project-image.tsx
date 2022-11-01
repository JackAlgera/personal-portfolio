import {Project} from "../_models/project.model";
import Image from "next/image";
import styles from "./project-image.module.scss";

interface ProjectImageProps {
  project: Project;
}

export const ProjectImage = (props: ProjectImageProps) => {
  return (
    <a className={styles.container}
       href={`/projects/${props.project.id}`}
    >
      <div className={styles.textContainer}>
        <p>{props.project.shortDescription}</p>
        <p>{props.project.date}</p>
      </div>
      <Image
        src={props.project.image.src}
        layout="fill"
        objectFit="cover"
        loading="lazy"
        alt={props.project.title}
      />
    </a>
  );
}
