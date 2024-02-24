"use client";

import {BoidBackground} from '../boids/boids-background';
import {SquaresBackground} from '../squares/squares-background';
import {useCallback, useEffect, useState} from 'react';
import {subscribe, unsubscribe} from '../../../events/background.event';
import styles from './background.module.scss';

export type BackgroundType = 'boids' | 'squares';

export const Background = () => {
  const [background, setBackground] = useState<BackgroundType>('boids')
  const [opacity, setOpacity] = useState(1);

  const switchBackgrounds = useCallback(
    () => {
      setOpacity(0);
      const timeoutChangeBackground = setTimeout(
        () => setBackground(background === 'boids' ? 'squares' : 'boids'),
        750);
      const timeoutFadeIn = setTimeout(
        () => setOpacity(1),
        750);
      return () => {
        clearTimeout(timeoutChangeBackground);
        clearTimeout(timeoutFadeIn);
      }
    },
    [background],
  );

  useEffect(() => {
    subscribe('switch-backgrounds', switchBackgrounds);

    return () => {
      unsubscribe('switch-backgrounds', switchBackgrounds);
    };
  }, [switchBackgrounds]);

  return (
    <>
      <div className={`opacity-${opacity} ${background === 'boids' ? styles.container : ''}`}>
        <BoidBackground activated={background === 'boids'} />
      </div>
      <div className={`opacity-${opacity} ${background === 'squares' ? styles.container : ''}`}>
        <SquaresBackground activated={background === 'squares'} />
      </div>
    </>
  )
}
