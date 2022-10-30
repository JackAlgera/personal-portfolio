import {Project, ProjectStyleType} from "../_models/project.model";
import {useEffect, useState} from "react";
import Image from "next/image";
import styles from "./project-card.module.scss";

interface ProjectCardProps {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  project: Project;
  inverse: boolean;
  styleClass: ProjectStyleType;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const [cssStyles, setCssStyles] = useState('');

  useEffect(() => {
    const getCssClass = () => {
      let cssStyles = '';

      switch (props.styleClass) {
        case ProjectStyleType.DOWN:
          cssStyles = styles.down;
          break;
        case ProjectStyleType.SELECT:
          cssStyles = styles.select;
          break;
        case ProjectStyleType.UP:
          cssStyles = styles.up;
          break;
        default:
      }

      return `${styles.card} ${cssStyles}`;
    }

    setCssStyles(getCssClass());

    return () => {};
  }, [props.styleClass]);

  return (
    <div className={`${styles.container} ${props.inverse ? styles.rowReverse : ''}`}>
      <h2 className={props.styleClass === ProjectStyleType.SELECT ? styles.rotate : ''}>
        {props.project.title}<br/>
        <span>{props.project.date}</span>
        <span>{props.project.techStack}</span>
      </h2>
      <a className={cssStyles}
         onMouseEnter={() => props.handleMouseEnter()}
         onMouseLeave={() => props.handleMouseLeave()}
         href={`/projects/${props.project.id}`}
      >
        <div>
          <p className={styles.centerText}>{props.project.shortDescription}</p>
          <p className={styles.centerText}>{props.project.date}</p>
        </div>
        <Image
          src={props.project.image.src}
          layout="fill"
          objectFit="cover"
          loading="lazy"
          alt={props.project.title}
        />
      </a>
    </div>
  );
}
