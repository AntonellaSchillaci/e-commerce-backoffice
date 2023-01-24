import styles from "./styles.module.scss";
import { AiTwotoneDelete } from "react-icons/ai";

const DeleteBtn = () => {
  return (
    <button className={styles.main}>
      <AiTwotoneDelete />
    </button>
  );
};

export default DeleteBtn;