'use client';

import {useEffect, useState} from 'react';
import {
  BACKEND_STACK_ICONS,
  DEVOPS_ICONS,
  FRONTEND_STACK_ICONS,
  OTHER_STACK_ICONS,
  THINGS_I_LIKE_TO_DO
} from '../models/about_me.model';
import styles from './page.module.scss';
import {CodeText} from './experience/code-text';
import {LoadingArrow} from '../components/loading-arrow/loading-arrow';
import Image from 'next/image';
import me from '../../public/me.jpg';
import {StatefulLink} from '../components/stateful/stateful-link';
import {TechStackRow} from './tech-stack-row';

const SHOW_SECOND_INTRO_DELAY = 1100;

export default function Home() {
  const [likeToDoText, setLikeToDoText] = useState('write code.');
  const [showSecondIntro, setShowSecondIntro] = useState(false);
  const [showLikeToDoText, setShowLikeToDoText] = useState(false);

  useEffect(() => {
    let timeoutShowSecondText = setTimeout(() => setShowSecondIntro(true), SHOW_SECOND_INTRO_DELAY);
    let timeoutShowLikeToDoText = setTimeout(() => setShowLikeToDoText(true), SHOW_SECOND_INTRO_DELAY + 500);

    return () => {
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
      <section className={styles.firstSection}>
        <div className={styles.introTextContainer}>
          <p>
            <CodeText
              text={"Hey! I'm Jack,"}
              color={"var(--color-3)"}
              stopTyping={true}
              typeDelay={30}
            />
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
          <div className="absolute place-self-center bottom-[17%]">
            <LoadingArrow />
          </div>
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
              Frontend you say ? Hell yes, I like to create silly projects using React, <StatefulLink href="/projects"><span>check them out</span></StatefulLink>!
            </p>
            <p>
              Otherwise I also like spending my time participating in online coding contests, and have finished various coding challenges:
            </p>
            <p>-
              <StatefulLink href="https://github.com/JackAlgera/CodingChallenges/tree/main/AdventOfCode">
                <span>AdventOfCode 2020 through 2023</span>
              </StatefulLink>
            </p>
            <p>-
              <StatefulLink href="https://github.com/JackAlgera/CodingChallenges/tree/main/FoobarGoogleInterview">
                <span>FooBar Google challenge</span>
              </StatefulLink>
            </p>
            <p>-
              <StatefulLink href="https://www.codingame.com/profile/d46b2b9844dbd087e3f67033c06dd47a9043511">
                <span>Various CodinGame contests</span>
              </StatefulLink>
            </p>
            <p>
              When I’m not sitting in front of my computer, I can be found boldering or doing Arduino/Electronic projects.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={me.src}
              fill
              style={{objectFit: "cover"}}
              alt="my-photo"/>
          </div>
        </div>
      </section>
      <section>
        <div className="flex-col w-[1000px] mt-24">
          <h2 className="numbered-heading"><span>02.</span>Tech stacks</h2>
          <TechStackRow label="The frameworks and languages I use to build client side applications" icons={FRONTEND_STACK_ICONS}/>
          <TechStackRow label="The tech I use to build backend services" icons={BACKEND_STACK_ICONS}/>
          <TechStackRow label="The tools I use to manage DevOps related problems" icons={DEVOPS_ICONS}/>
          <TechStackRow label="Other tools I use to increase productivity" icons={OTHER_STACK_ICONS}/>
        </div>
      </section>
    </>
  )
}
