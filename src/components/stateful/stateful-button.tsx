'use client';

import {PropsWithChildren, useEffect, useState} from 'react';
import {useWatcherStore} from '../../store/watcher-store';

interface StatefulButtonProps {
  activated: boolean;
  onClick: () => void;
  disabled?: boolean;
  appearDelay?: number;
}

export const StatefulButton = (props: StatefulButtonProps & PropsWithChildren) => {
  const { activateWatcher, deactivateWatcher } = useWatcherStore();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined = undefined;
    if (props.appearDelay) {
      timeout = setTimeout(() => setVisible(true), props.appearDelay);
    } else {
      setVisible(true);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);


  return (
    <button onClick={props.onClick}
            className={`${props.activated ? 'activated' : ''} opacity-${visible ? 1 : 0}`}
            onMouseEnter={activateWatcher}
            onMouseLeave={deactivateWatcher}
            disabled={props.disabled ?? false}
    >{props.children}</button>
  );
}
