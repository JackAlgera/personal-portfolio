import styles from "./index.module.scss";
import Image from "next/image";
import me from "../public/me.jpg";
import {useEffect, useState} from "react";
import {CodeText} from "../components/_utils/code-text";
import {TechStackRow} from "../components/about-me/tech-stack-row";
import {
  BACKEND_STACK_ICONS,
  CI_CD_ICONS,
  FRONTEND_STACK_ICONS, OTHER_STACK_ICONS,
  THINGS_I_LIKE_TO_DO
} from "../components/_models/about_me.model";
import {StatefulLink} from "../components/_utils/stateful-link";

interface HomeProps {
  watcherActivated: boolean;
  setWatcherActivated: (activate: boolean) => void;
  initLoad: boolean;
}

export default function Home(props: HomeProps) {
  const [likeToDoText, setLikeToDoText] = useState('write code.');
  const [showFirstIntro, setShowFirstIntro] = useState(false);
  const [showSecondIntro, setShowSecondIntro] = useState(false);
  const [showLikeToDoText, setShowLikeToDoText] = useState(false);

  useEffect(() => {
    let initDelay = 3000;

    if (!props.initLoad) {
      initDelay = 0;
    }

    let timeoutShowFirstText = setTimeout(() => setShowFirstIntro(true), initDelay);
    let timeoutShowSecondText = setTimeout(() => setShowSecondIntro(true), initDelay + 1200);
    let timeoutShowLikeToDoText = setTimeout(() => setShowLikeToDoText(true), initDelay + 1700);

    return () => {
      clearTimeout(timeoutShowFirstText);
      clearTimeout(timeoutShowSecondText);
      clearTimeout(timeoutShowLikeToDoText);
    };
  }, []);

  const getNextLikeToDoText = () => {
    let index = THINGS_I_LIKE_TO_DO.indexOf(likeToDoText);
    return THINGS_I_LIKE_TO_DO[(index + 1) % THINGS_I_LIKE_TO_DO.length];
  }

  return (
    <>
      <section>
        <div className={styles.introTextContainer}>
          <p>
            {showFirstIntro &&
                <CodeText
                    text={"Hey! I'm Jack,"}
                    color={"var(--color-3)"}
                    stopTyping={true}
                    typeDelay={30}
                />
            }
            {showSecondIntro &&
                <CodeText
                    text={"\nand I like to"}
                    color={"var(--color-3)"}
                    stopTyping={true}
                    typeDelay={30}
                />
            }
            {showLikeToDoText &&
                <span style={{color: "var(--color-1)"}}>
                    &nbsp;
                    <CodeText
                        text={likeToDoText}
                        color={"var(--color-1)"}
                        stopTyping={false}
                        typeDelay={50}
                        minTypeDelay={25}
                        reverseText={true}
                        reverseTextCallback={() => setLikeToDoText(getNextLikeToDoText())}/>
                </span>
            }
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
              Frontend you say ? Hell yes, I like to create silly projects using React, <StatefulLink href="/experience" content={<span>check them out</span>} watcherState={{ watcherActivated: props.watcherActivated, setWatcherActivated: props.setWatcherActivated }} externalLink={false} />!
            </p>
            <p>
              Otherwise I also like spending my time participating in online coding contests (like <StatefulLink href="https://www.codingame.com/home" content={<span>CodinGame</span>} watcherState={{ watcherActivated: props.watcherActivated, setWatcherActivated: props.setWatcherActivated }} />), and have finished various coding challenges:
            </p>
            <p>
              <StatefulLink href="https://github.com/JackAlgera/CodingChallenges/tree/main/AdventOfCode" content={<span>AdventOfCode 2021 and 2022</span>} watcherState={{ watcherActivated: props.watcherActivated, setWatcherActivated: props.setWatcherActivated }} />, <StatefulLink href="https://github.com/JackAlgera/CodingChallenges/tree/main/FoobarGoogleInterview" content={<span>FooBar Google challenge</span>} watcherState={{ watcherActivated: props.watcherActivated, setWatcherActivated: props.setWatcherActivated }} />
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
          <TechStackRow label="The frameworks and languages I use to build client side applications" watcherState={{ watcherActivated: props.watcherActivated, setWatcherActivated: props.setWatcherActivated }} icons={FRONTEND_STACK_ICONS}/>
          <TechStackRow label="The tech I use to build backend services" watcherState={{ watcherActivated: props.watcherActivated, setWatcherActivated: props.setWatcherActivated }} icons={BACKEND_STACK_ICONS}/>
          <TechStackRow label="The tools I use to manage DevOps related problems" watcherState={{ watcherActivated: props.watcherActivated, setWatcherActivated: props.setWatcherActivated }} icons={CI_CD_ICONS}/>
          <TechStackRow label="Other tools I use to increase productivity" watcherState={{ watcherActivated: props.watcherActivated, setWatcherActivated: props.setWatcherActivated }} icons={OTHER_STACK_ICONS}/>
        </div>
      </section>
    </>
  )
}
