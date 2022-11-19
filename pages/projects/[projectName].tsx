import {Project, PROJECTS, Section, SectionType} from "../../components/_models/project.model";
import styles from "./[projectName].module.scss";
import Image from "next/image";
import YouTube from "react-youtube";
import {ShowMoreProjects} from "../../components/projects/show-more-projects";
import {WatcherState} from "../../components/_models/watcher.model";
import {useEffect, useState} from "react";

const MORE_PROJECTS_SENTENCES = [
  'Hey you, yes you, check out my other projects !',
  'Projects, projects and more projects !',
  'Wantz sum more projects ?',
  'Look what other cool stuff I found that you might like !',
  '[Insert random projects pun here]'
];

interface ProjectPageProps {
  project: Project;
  watcherState: WatcherState;
}

const ProjectPage = (props: ProjectPageProps) => {
  const [moreProjectsSentence, setMoreProjectsSentence] = useState('');
  const [moreProjects, setMoreProjects] = useState<Project[]>([]);

  useEffect(() => {
    setMoreProjectsSentence(MORE_PROJECTS_SENTENCES[Math.floor(Math.random() * MORE_PROJECTS_SENTENCES.length)]);
    setMoreProjects(Array.from(PROJECTS.values())
      .filter((project) => project.id != props.project.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2))
  }, [props.project]);


  const generateSection = (section: Section, index: number) => {
    let htlmSection = (<></>);

    switch (section.sectionType) {
      case SectionType.TEXT_WITH_IMAGE:
        htlmSection = (
          <div className={`${styles.container} ${section.rowReverse ? styles.rowReverse : ''}`}>
            <p>{section.text}</p>
            <div className={styles.imageContainer}>
              <Image
                src={section.image.src}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                alt="image"
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
          <div className={styles.tldrContainer}>
            <h2>TL;DR</h2>
            <div className={`${styles.container} ${section.rowReverse ? styles.rowReverse : ''}`}>
              <p>{section.text}</p>
              <div className={styles.imageContainer}>
                <Image
                  src={section.image.src}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                  alt="image"
                />
              </div>
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
      case SectionType.IMAGE_GALLERY:
        htlmSection = (
          <div className={styles.galleryContainer}>
            {
              section.imageGalleryList && section.imageGalleryList.map((image, index) => (
                <div key={"gallery-" + index} className={styles.imageContainer}>
                  <Image
                    src={image.src}
                    layout="fill"
                    objectFit="contain"
                    loading="lazy"
                    alt="image"
                  />
                </div>
            ))}
          </div>
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
      <h1 className={styles.title}>
        {props.project.title}<br/>
        <span>{props.project.date}</span>
        <span>{props.project.techStack}</span>
      </h1>
      {props.project.sections.map((section, index) => generateSection(section, index))}
      <ShowMoreProjects moreProjectsSentence={moreProjectsSentence} moreProjects={moreProjects}/>
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
    props: {
      project: PROJECTS.get(projectName)
    } as ProjectPageProps
  }
}

export default ProjectPage;
