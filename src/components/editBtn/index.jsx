import styles from "./styles.module.scss";
import { BiEditAlt } from "react-icons/bi";

const EditBtn = ({ metodo }) => {
  return (
    <button onClick={() => metodo()} className={styles.main}>
      <BiEditAlt />
    </button>
  );
};

export default EditBtn;