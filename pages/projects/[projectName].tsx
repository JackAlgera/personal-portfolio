import {Project, PROJECTS} from "../../components/_models/project.model";
import {ProjectCard} from "../../components/projects/project-card";

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = (props: ProjectPageProps) => {
  return (
    <>
      {props.project ?
        <ProjectCard project={props.project} handleMouseLeave={() => {}} handleMouseEnter={() => {}} inverse={false} styleClass={null} />
        : null}
    </>
  );
}

// TODO: Use getStaticProps with getStaticPaths instead
export async function getServerSideProps(context) {
  const projectName: string = context.params.projectName;

  if (!PROJECTS.has((projectName))) {
    return {
      notFound: true,
    }
  }

  return {
    props: { project: PROJECTS.get(projectName) } as ProjectPageProps
  }
}

export default ProjectPage;
