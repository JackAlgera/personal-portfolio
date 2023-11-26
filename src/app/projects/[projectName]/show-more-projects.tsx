import {Project} from "../../../models/project.model";
import {ProjectImage} from "../project-image";
import {useWatcherStore} from '../../../store/watcher-store';

interface ShowMoreProjectsProps {
  moreProjectsSentence: string;
  moreProjects: Project[];
}

export const ShowMoreProjects = (props: ShowMoreProjectsProps) => {
  const { activateWatcher, deactivateWatcher } = useWatcherStore();

  return (
    <section>
      <div className="text-center mt-2 mb-14">
        <h2>{props.moreProjectsSentence}</h2>
        <div className="grid grid-cols-2 gap-5">
          {props.moreProjects.map(project => (
              <ProjectImage
                key={project.title}
                handleMouseEnter={activateWatcher}
                handleMouseLeave={deactivateWatcher}
                project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
