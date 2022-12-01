import styles from "./index.module.scss";
import Image from "next/image";
import me from "../public/me.jpg";
import {useState} from "react";
import {CodeText} from "../components/_utils/code-text";

const THINGS_I_LIKE_TO_DO = [
  'conjure Kubernetes magic.',
  'create web applications.',
  'design complex systems.',
  'compete in CodinGame.',
  'write code.',
  'relax and play video-games.',
  'build Arduino robots.',
  'go boldering.',
  'drink coffee and procrastinate.',
  'learn new frameworks and techs.',
  '[Insert random fun fact].'
];

export default function Home() {
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
    <section>
      <h2 className="numbered-heading"><span>01.</span>About Me</h2>
      <pre className={styles.introTextContainer}>
        <p>Hey! I&apos;m <span style={{color: "var(--color-1)"}}>Jack</span>!</p>
        <p>And I like to <span style={{color: "var(--color-1)"}}><CodeText
            text={likeToDoText}
            color={"var(--color-1)"}
            stopTyping={false}
            typeDelay={90}
            minTypeDelay={25}
            reverseText={true}
            reverseTextCallback={() => updateLikeToDoText()}
          /></span>
        </p>
      </pre>
      <div className="inner">
        <div className={styles.firstSection}>
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
      </div>
    </section>
  )
}
