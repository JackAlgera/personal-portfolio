import {Project} from "../../models/project.model";
import {ProjectImage} from "./project-image";
import styles from "./show-more-projects.module.scss";
import {WatcherState} from "../_models/watcher.model";

interface ShowMoreProjectsProps {
  moreProjectsSentence: string;
  moreProjects: Project[];
  watcherState: WatcherState;
}

export const ShowMoreProjects = (props: ShowMoreProjectsProps) => {
  return (
    <section>
      <div className={styles.container}>
        <h2>{props.moreProjectsSentence}</h2>
        <div className={styles.imagesContainer}>
          {props.moreProjects.map(project => (
            <div key={project.title}>
              <ProjectImage
                handleMouseEnter={() => props.watcherState.setWatcherActivated(true)}
                handleMouseLeave={() => props.watcherState.setWatcherActivated(false)}
                project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
