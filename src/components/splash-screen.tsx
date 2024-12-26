"use client";

import {PropsWithChildren, useEffect, useState} from 'react';

const START_LOADING_DELAY = 500;
const DONE_LOADING_DELAY = 7000;

export const SplashScreen = ({children}: PropsWithChildren) => {
  const [loadingSplash, setLoadingSplash] = useState<boolean>(false)
  const [showChildren, setShowChildren] = useState<boolean>(true);

  const onDoneLoading = () => {
    setShowChildren(true);
    setLoadingSplash(false);
  }

  useEffect(() => {
    const timeoutStartLoading = setTimeout(() => setLoadingSplash(false), START_LOADING_DELAY);
    const timeoutDoneLoading = setTimeout(onDoneLoading, DONE_LOADING_DELAY);
    return () => {
      clearTimeout(timeoutStartLoading)
      clearTimeout(timeoutDoneLoading)
    }
  }, []);

  return (
    <>
      { loadingSplash &&
        <div className="flex fixed items-center justify-center w-full h-full z-20">
          <svg id="loading-container" width="100" height="100" viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
            <circle id="big" cx="50%" cy="50%" r="13" fill="#FFB703"/>
            <g id="small-container">
              {[...Array(6)].map((_, index) => (
                <g key={"circle-" + index}>
                  <circle r="7.5" fill="#FFB703"/>
                </g>
              ))}
            </g>
            <circle id="center" cx="50%" cy="50%" r="13.5" fill="#023047" stroke="#FFB703" strokeWidth="3"/>
          </svg>
        </div>
      }
      { !loadingSplash && showChildren && children }
    </>
  );
}
