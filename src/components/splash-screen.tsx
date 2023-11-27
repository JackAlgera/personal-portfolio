import {useEffect, useState} from 'react';

const INIT_DELAY = 500;
const ON_FINISH_LOADING_DELAY = 7000;

export interface SplashScreenProps {
  onFinishLoading: () => void;
}

export const SplashScreen = (props: SplashScreenProps) => {
  const [startLoading, setStartLoading] = useState<boolean>(false)

  useEffect(() => {
    let timeout = setTimeout(() => {
      setStartLoading(true);
    }, INIT_DELAY);

    return () => {
      clearTimeout(timeout);
    };
  }, [props]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      props.onFinishLoading();
    }, ON_FINISH_LOADING_DELAY);

    return () => {
      clearTimeout(timeout);
    };
  }, [props]);

  return (
    <>
      { startLoading ?
        <div className="flex fixed items-center justify-center w-full h-full z-20">
          <svg id="loading-container" width="100" height="100" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
            <circle id="big" cx="50%" cy="50%" r="13" fill="#FFB703"/>
            <g id="small-container">
              <g>
                <circle r="7.5" fill="#FFB703"/>
              </g>
              <g>
                <circle r="7.5" fill="#FFB703"/>
              </g>
              <g>
                <circle r="7.5" fill="#FFB703"/>
              </g>
              <g>
                <circle r="7.5" fill="#FFB703"/>
              </g>
              <g>
                <circle r="7.5" fill="#FFB703"/>
              </g>
              <g>
                <circle r="7.5" fill="#FFB703"/>
              </g>
            </g>
            <circle id="center" cx="50%" cy="50%" r="13.5" fill="#023047" stroke="#FFB703" strokeWidth="3"/>
          </svg>
        </div> : <></>
      }
    </>
  );
}
