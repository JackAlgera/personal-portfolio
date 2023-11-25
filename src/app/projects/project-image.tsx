import {Project} from "../../models/project.model";
import Image from "next/image";
import styles from "./project-image.module.scss";
import Link from "next/link";

interface ProjectImageProps {
  project: Project;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export const ProjectImage = (props: ProjectImageProps) => {
  return (
    <Link href={`/projects/${props.project.id}`}
          className={styles.container}
          onMouseEnter={props.handleMouseEnter}
          onMouseLeave={props.handleMouseLeave}>
        <div className={styles.textContainer}>
          <p>{props.project.shortDescription}</p>
          <p>{props.project.date}</p>
        </div>
        <Image
          src={props.project.image!.src}
          layout="fill"
          objectFit="cover"
          loading="lazy"
          alt={props.project.title}
        />
    </Link>
  );
}
