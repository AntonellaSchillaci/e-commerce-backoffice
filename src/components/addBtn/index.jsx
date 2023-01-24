import styles from "./styles.module.scss";
import { IoMdAddCircle } from "react-icons/io";

const AddBtn = ({ metodo }) => {
  return (
    <button onClick={() => metodo()} className={styles.main}>
      <IoMdAddCircle />
    </button>
  );
};

export default AddBtn;