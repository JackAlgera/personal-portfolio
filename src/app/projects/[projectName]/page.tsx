'use client';

import styles from './page.module.scss';
import Image from 'next/image';
import YouTube from 'react-youtube';
import {useEffect, useState} from 'react';
import {Project, PROJECTS, Section, SectionType} from '../../../models/project.model';
import {ShowMoreProjects} from './show-more-projects';
import {notFound} from 'next/navigation';

const MORE_PROJECTS_SENTENCES = [
  'Hey you, yes you, check out my other projects !',
  'Projects, projects and more projects !',
  'Wantz sum more projects ?',
  'Look what other cool stuff I found that you might like !',
  '[Insert random projects pun here]'
];

export default function Page({ params }: { params: { projectName: string } }) {
  const [moreProjectsSentence, setMoreProjectsSentence] = useState('');
  const [moreProjects, setMoreProjects] = useState<Project[]>([]);
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    const currentProject: Project = { ...PROJECTS.get(params.projectName)} as Project;

    if (!currentProject) {
      notFound();
    }

    setProject(currentProject!);
    setMoreProjectsSentence(MORE_PROJECTS_SENTENCES[Math.floor(Math.random() * MORE_PROJECTS_SENTENCES.length)]);
    setMoreProjects(Array.from(PROJECTS.values())
      .filter((project) => project.id != currentProject.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2))
  }, [params.projectName]);


  const generateSection = (section: Section, index: number) => {
    let htmlSection = <></>;

    switch (section.sectionType) {
      case SectionType.TEXT_WITHOUT_IMAGE:
        htmlSection = (
          <section key={`section ${index}`} className={styles.container}>
            <p>{section.text}</p>
          </section>
        );
        break;
      case SectionType.TLDR:
        htmlSection = (
          <section key={`section ${index}`} className={styles.tldrContainer}>
            <h2>TL;DR</h2>
            <div className={`${styles.container} ${section.rowReverse ? styles.rowReverse : ''}`}>
              <p>{section.text}</p>
              <div className={styles.imageContainer}>
                <Image
                  src={section.image!.src}
                  fill
                  style={{objectFit: "contain"}}
                  alt="image"
                />
              </div>
            </div>
          </section>
        );
        break;
      case SectionType.VIDEO:
        htmlSection = (
          <section key={`section ${index}`}>
            <YouTube className={styles.video} videoId={section.youtubeVideoId!} />
          </section>
        );
        break;
      case SectionType.IMAGE_GALLERY:
        htmlSection = (
          <section key={`section ${index}`} className={styles.galleryContainer}>
            {
              section.imageGalleryList && section.imageGalleryList.map((image, index) => (
                <div key={"gallery-" + index} className={styles.imageContainer}>
                  <Image
                    src={image.src}
                    fill
                    style={{objectFit: "contain"}}
                    alt="image"
                  />
                </div>
            ))}
          </section>
        );
        break;
    }

    return htmlSection;
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
          <div className="flex flex-col gap-5">
            {project.sections.map((section, index) => generateSection(section, index))}
          </div>
        </>
      }
      <ShowMoreProjects moreProjectsSentence={moreProjectsSentence}
                        moreProjects={moreProjects} />
    </>
  );
}
