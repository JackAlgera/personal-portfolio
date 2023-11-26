import styles from "./loading-arrow.module.scss";
import Arrows from "../../../public/arrows.icon.svg";

export const LoadingArrow = () => {
  return (
    <div className={styles.container}>
      <Arrows />
    </div>
  );
}
