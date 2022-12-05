import styles from "./loading-page.module.scss";
import {useEffect} from "react";
import {Watcher} from "./watcher";

interface LoadingPageProps {
  onFinish: () => void;
}

export const LoadingPage = (props: LoadingPageProps) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      props.onFinish();
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, [props]);

  return (
    <div className={styles.container}>
      <Watcher watcherState={{ watcherActivated: true, setWatcherActivated: () => {} }}/>
    </div>
  );
}
