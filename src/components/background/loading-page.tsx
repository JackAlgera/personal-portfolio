import styles from "./loading-page.module.scss";
import {useEffect} from "react";
import LoadingSvg from "../../../public/loading-animation.icon.svg";

interface LoadingPageProps {
  onFinish: () => void;
}

export const LoadingPage = (props: LoadingPageProps) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      props.onFinish();
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  }, [props]);

  return (
    <div className={styles.container}>
      <LoadingSvg />
    </div>
  );
}
