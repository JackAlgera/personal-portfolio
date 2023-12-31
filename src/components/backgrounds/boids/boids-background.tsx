import styles from './boids-background.module.scss';
import {useEffect, useRef, useState} from 'react';
import {useMouseStore} from '../../../store/mouse-store';
import {Boid} from './boid.model';
import {BOID_SIZE, initBoids, updateBoids} from './boid.service';

export interface BoidBackgroundProps {
  activated: boolean;
}

export const BoidBackground = (props: BoidBackgroundProps) => {
  const [boids, setBoids] = useState<Boid[]>([])
  const container = useRef<HTMLDivElement>(null);
  const { x, y } = useMouseStore();

  useEffect(() => {
    if (!container) {
      return;
    }

    setBoids(() => initBoids(container.current!));
  }, [container]);

  useEffect(() => {
    if (boids.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setBoids(() => updateBoids(boids, x, y, container.current!));
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [boids]);

  return (
    <div ref={container} className={`fixed left-0 w-full h-full overflow-y-hidden ${props.activated ? 'z-0' : 'z-[-1]'}`}>
      {boids.map((boid, index) => (
        <svg height={BOID_SIZE}
             width={BOID_SIZE}
             key={index}
             style={{
               transform: `translate(${boid.pos.x}px, ${boid.pos.y}px) rotate(${Math.atan2(boid.vel.y, boid.vel.x) * 180 / Math.PI + 90}deg)`,
              }}
             className={`opacity-0 absolute z-10 ${styles.boid}`}>
          <polygon fill={"var(--color-2-transparent)"} points={`5,${BOID_SIZE} 10,0 15,${BOID_SIZE}`}/>
        </svg>
      ))}
    </div>
  );
}
