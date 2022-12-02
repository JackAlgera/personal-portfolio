import styles from "./index.module.scss";
import Image from "next/image";
import me from "../public/me.jpg";
import {useState} from "react";
import {CodeText} from "../components/_utils/code-text";
import {TechStackRow} from "../components/about-me/tech-stack-row";
import {
  BACKEND_STACK_ICONS,
  CI_CD_ICONS,
  FRONTEND_STACK_ICONS, OTHER_STACK_ICONS,
  THINGS_I_LIKE_TO_DO
} from "../components/_models/about_me.model";
import {WatcherState} from "../components/_models/watcher.model";

export default function Home(watcherState: WatcherState) {
  const [likeToDoText, setLikeToDoText] = useState('write code.');

  const getRandomLikeToDoText = () => {
    return THINGS_I_LIKE_TO_DO[Math.floor(Math.random() * THINGS_I_LIKE_TO_DO.length)];
  }

  const updateLikeToDoText = () => {
    let val = getRandomLikeToDoText();
    while (val === likeToDoText) {
      val = getRandomLikeToDoText();
    }
    setLikeToDoText(val);
  }

  return (
    <>
      <section>
        <div className={styles.introTextContainer}>
          <p>Hey! I&apos;m <span style={{color: "var(--color-1)"}}>Jack</span>!</p>
          <p>And I like to <span style={{color: "var(--color-1)"}}><CodeText
            text={likeToDoText}
            color={"var(--color-1)"}
            stopTyping={false}
            typeDelay={50}
            minTypeDelay={25}
            reverseText={true}
            reverseTextCallback={() => updateLikeToDoText()}
          /></span>
          </p>
        </div>
      </section>
      <section>
        <h2 className="numbered-heading"><span>01.</span>About Me</h2>
        <div className={`inner ${styles.secondSection}`}>
          <div className={styles.bioTextContainer}>
            <p>
              Semi-fresh graduate, I’m currently a Backend Software Engineer deploying and maintaining micro-services at BlaBlaCar, with a strong focus on CI/CD and Kubernetes-related topics.
            </p>
            <p>
              Frontend you say ? Hell yes, I like to create silly projects using React, check them out !
            </p>
            <p>
              Otherwise I also like spending my time participating in online coding contests (CodinGame), and have finished various coding challenges (AdventOfCode 2021, 2022, FooBar Google challenge).
            </p>
            <p>
              When I’m not sitting in front of my computer, I can be found boldering or doing Arduino/Electronic projects.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={me.src}
              layout="fill"
              objectFit="cover"
              loading="lazy"
              alt={"me"}
            />
          </div>
        </div>
      </section>
      <section>
        <div className={styles.thirdSection}>
          <h2 className="numbered-heading"><span>02.</span>Tech stacks</h2>
          <TechStackRow label="The frameworks and languages I use to build client side applications" watcherState={watcherState} icons={FRONTEND_STACK_ICONS}/>
          <TechStackRow label="The tech I use to build backend services" watcherState={watcherState} icons={BACKEND_STACK_ICONS}/>
          <TechStackRow label="The tools I use to manage DevOps related problems" watcherState={watcherState} icons={CI_CD_ICONS}/>
          <TechStackRow label="Other tools I use to increase productivity" watcherState={watcherState} icons={OTHER_STACK_ICONS}/>
        </div>
      </section>
    </>
  )
}
