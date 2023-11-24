'use client';

import {useEffect, useState} from "react";
import styles from "./watcher.module.scss";
import {useWatcherStore} from '../../store/watcher-store';

export const Watcher = () => {
  const { watcherActivated } = useWatcherStore();
  const [watcherContainer, setWatcherContainer] = useState<HTMLDivElement|null>(null);
  const [theta, setTheta] = useState(0);

  const getAngle = (mx, my, wx, wy) => {
    const dx = mx - wx;
    const dy = my - wy;

    const rad = Math.atan2(dy, dx); // Angle with x-axis
    return Math.abs(rad * (180 / Math.PI)) + 90;
  }

  useEffect(() => {
    const handleWindowMouseMove = event => {
      if (watcherContainer) {
        const mouseX = event.x;
        const mouseY = event.y;

        const rekt = watcherContainer.getBoundingClientRect();
        const watcherX = rekt.x + rekt.width / 2;
        const watcherY = rekt.top + rekt.height / 2;

        const angleDeg = getAngle(mouseX, mouseY, watcherX, watcherY);
        setTheta(angleDeg);
      }
    };

    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, [watcherContainer]);

  return (
    <div ref={(element) => setWatcherContainer(element)}
         className={`${styles.watcherContainer} ${watcherActivated ? "" : styles.stop}`}>
      {(new Array(6).fill(0)).map((_, index) =>
        <div key={index} className={styles.spinner}/>
      )}
      <div style={{transform: `rotate(${theta}deg)`}} className={styles.watcher}/>
    </div>
  );
}
