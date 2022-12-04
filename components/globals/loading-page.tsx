import styles from "./loading-page.module.scss";
import {useEffect} from "react";
import {Watcher} from "./watcher";

interface LoadingPageProps {
  onFinish: () => void;
}

export const LoadingPage = (props: LoadingPageProps) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("DONE")
      props.onFinish();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Watcher watcherState={{ watcherActivated: true, setWatcherActivated: () => {} }}/>
    </div>
  );
}
