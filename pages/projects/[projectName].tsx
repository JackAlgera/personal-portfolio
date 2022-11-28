import {Project, PROJECTS, Section, SectionType} from "../../components/_models/project.model";
import styles from "./[projectName].module.scss";
import Image from "next/image";
import YouTube from "react-youtube";
import {ShowMoreProjects} from "../../components/projects/show-more-projects";
import {WatcherState} from "../../components/_models/watcher.model";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const MORE_PROJECTS_SENTENCES = [
  'Hey you, yes you, check out my other projects !',
  'Projects, projects and more projects !',
  'Wantz sum more projects ?',
  'Look what other cool stuff I found that you might like !',
  '[Insert random projects pun here]'
];

const ProjectPage = (watcherState: WatcherState) => {
  const [moreProjectsSentence, setMoreProjectsSentence] = useState('');
  const [moreProjects, setMoreProjects] = useState<Project[]>([]);
  const [project, setProject] = useState<Project>(null);

  const router = useRouter();
  const { projectName } = router.query;

  useEffect(() => {
    const currentProject = { ...PROJECTS.get(projectName as string)};

    watcherState.setWatcherActivated(false);
    setProject(currentProject);
    setMoreProjectsSentence(MORE_PROJECTS_SENTENCES[Math.floor(Math.random() * MORE_PROJECTS_SENTENCES.length)]);
    setMoreProjects(Array.from(PROJECTS.values())
      .filter((project) => project.id != currentProject.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2))
  }, [projectName]);


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
                <div key={"gallery-" + index}
                     style={{boxShadow: "unset"}}
                     className={styles.imageContainer}>
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
      {project &&
        <>
          <h1 className={styles.title}>
            {project.title}<br/>
              <span>{project.date}</span>
              <span>{project.techStack}</span>
          </h1>
          {project.sections.map((section, index) => generateSection(section, index))}
        </>
      }
      <ShowMoreProjects watcherState={watcherState}
                        moreProjectsSentence={moreProjectsSentence}
                        moreProjects={moreProjects} />
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
    props: {}
  }
}

export default ProjectPage;
