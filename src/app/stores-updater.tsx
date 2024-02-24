'use client';

import {useEffect} from 'react';
import {useMouseStore} from '../store/mouse-store';

export const StoresUpdater = () => {
  const { updateMouse } = useMouseStore();

  useEffect(() => {
    const handleWindowMouseMove = event => {
      const mouseX = event.x;
      const mouseY = event.y;
      updateMouse(mouseX, mouseY);
    };

    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, [updateMouse]);

  return <></>;
}
