import {Project, PROJECTS, Section} from "../../components/_models/project.model";
import styles from "./[projectName].module.scss";
import Image from "next/image";
import YouTube from "react-youtube";

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = (props: ProjectPageProps) => {
  const generateSection = (section: Section, index: number) => {
    return (
      <section key={index} className={styles.container}>
        {section.text && section.image ?
          <>
            <p>{section.text}</p>
            <div className={styles.imageContainer}>
              <Image
                src={props.project.image.src}
                layout="fill"
                objectFit="cover"
                loading="eager"
                alt={props.project.title}
              />
            </div>
          </>
          : section.youtubeVideoId ?
            <YouTube
              className={styles.video}
              videoId={section.youtubeVideoId}
              opts={{
                height: '441',
                width: '784'
              }}
            />
          : null
        }
      </section>
    );
  }

  return (
    <>
      <h1 className="numbered-heading">{props.project.title}</h1>
      {props.project.sections.map((section, index) => generateSection(section, index))}
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
