import styles from "./styles.module.css";
import Carousel from "../Carousel";
import data from "./data";

export default function HeroComponent() {
  return (
    <>
      <div className={styles.Hero}>
        <Carousel slides={data} />
      </div>
    </>
  );
}
