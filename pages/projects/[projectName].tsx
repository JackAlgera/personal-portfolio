import {Project, PROJECTS, Section, SectionType} from "../../components/_models/project.model";
import styles from "./[projectName].module.scss";
import Image from "next/image";
import YouTube from "react-youtube";

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = (props: ProjectPageProps) => {
  const generateSection = (section: Section, index: number) => {
    let htlmSection = (<></>);

    switch (section.sectionType) {
      case SectionType.TEXT_WITH_IMAGE:
        htlmSection = (
          <div className={`${styles.container} ${section.rowReverse ? styles.rowReverse : ''}`}>
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
          </div>
        );
        break;
      case SectionType.TEXT_WITHOUT_IMAGE:
        htlmSection = (
          <div className={styles.container}>
            <p>{section.text}</p>
          </div>
        );
        break;
      case SectionType.TLDR:
        htlmSection = (
          <div className={`${styles.container} ${section.rowReverse ? styles.rowReverse : ''}`}>
            <div className={styles.tldrTextContainer}>
              <h2>TL;DR</h2>
              <p>{section.text}</p>
            </div>
            <div className={styles.imageContainer}>
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
        break;
      case SectionType.VIDEO:
        htlmSection = (
          <YouTube
            className={styles.video}
            videoId={section.youtubeVideoId}
            opts={{
              height: '441',
              width: '784'
            }}
          />
        );
        break;
    }

    return (
      <section key={index} className={styles.sectionContainer}>
        {htlmSection}
      </section>
    );
  }

  return (
    <>
      <h1 style={{ marginTop: "40px" }} className="numbered-heading">{props.project.title}</h1>
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
