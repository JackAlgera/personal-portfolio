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

      console.log(`${styles.card} ${cssStyles}`);
      return `${styles.card} ${cssStyles}`;
    }

    setCssStyles(getCssClass());

    return () => {};
  }, [props.styleClass]);


  return (
    <div className={`${styles.container} ${props.inverse ? styles.rowReverse : ''}`}>
      <h2>{props.project.title}</h2>
      <div className={cssStyles}
           onMouseEnter={() => props.handleMouseEnter()}
           onMouseLeave={() => props.handleMouseLeave()}
      >
        <p>{props.project.description}</p>
        <Image
          src={props.project.image.src}
          layout="fill"
          objectFit="cover"
          loading="eager"
          alt={props.project.title}
        />
      </div>
    </div>
  );
}
