import CategoryForm from "../categoryForm";
import styles from "./styles.module.scss";
const Modal = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.modal}>
        <button className={styles.btnClose} onClick={() => setShowModal(false)}>❌</button>
        <CategoryForm
          data={data}
          getData={getData}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default Modal;