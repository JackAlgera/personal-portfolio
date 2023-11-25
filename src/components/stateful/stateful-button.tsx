'use client';

import {PropsWithChildren} from 'react';
import {useWatcherStore} from '../../store/watcher-store';

interface StatefulButtonProps {
  activated: boolean;
  onClick: () => void;
}

export const StatefulButton = (props: StatefulButtonProps & PropsWithChildren) => {
  const { activateWatcher, deactivateWatcher } = useWatcherStore();

  return (
    <button onClick={props.onClick}
            className={props.activated ? 'activated' : ''}
            onMouseEnter={activateWatcher}
            onMouseLeave={deactivateWatcher}
    >{props.children}</button>
  );
}
