import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import EditModal from "./../editModal";
import styles from "./styles.module.scss";

const EditBtn = ({ data, getData }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <EditModal getData={getData} data={data} setShowModal={setShowModal} />
      )}
      <button onClick={() => setShowModal(true)} className={styles.main}>
        <BiEditAlt />
      </button>
    </>
  );
};

export default EditBtn;