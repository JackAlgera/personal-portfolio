import {useEffect, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import animationEnd = Simulate.animationEnd;

export interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen = (props: SplashScreenProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    setTimeout(() => {
      props.finishLoading();
    }, 2000);
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();

    return () => clearTimeout(timeout);
  }, []);

  return <div>Splashing...</div>
}

export default SplashScreen;
