import {WatcherState} from "../_models/watcher.model";

interface StatefulButtonProps {
  content;
  activated: boolean;
  onClick: () => void;
  watcherState: WatcherState;
}

export const StatefulButton = (props: StatefulButtonProps) => {
  return (
    <button onClick={() => props.onClick()}
            onMouseEnter={() => props.watcherState.setWatcherActivated(true)}
            onMouseLeave={() => props.watcherState.setWatcherActivated(false)}
            className={props.activated ? 'activated' : ''}
    >{props.content}</button>
  );
}
