import styles from "./styles.module.scss";
import { HiOutlineRefresh } from "react-icons/hi";

const RefreshBtn = ({ getData }) => {
  return (
    <button className={styles.main} onClick={() => getData()}>
      <HiOutlineRefresh />
    </button>
  );
};

export default RefreshBtn;