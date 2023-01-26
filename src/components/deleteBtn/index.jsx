import styles from "./styles.module.scss";
import { AiTwotoneDelete } from "react-icons/ai";
import { DELETE } from "../../libs/HTTP";

const DeleteBtn = ({id, getData}) => {
  const deleteElement = () => {
    DELETE("categories", "/" + id).then(data => {
      getData();
    })
  }
  return (
    <button  onClick={() => deleteElement()} className={styles.main}>
      <AiTwotoneDelete />
    </button>
  );
};

export default DeleteBtn;