import { useEffect, useState } from "react";
import { POST, PUT } from "../../libs/HTTP";
import styles from "./styles.module.scss";

const CategoryForm = ({ setShowModal, getData, data }) => {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        name: data.name,
        image: data.image,
      });
      setEdit(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleForm = (input, e) => {
    setForm({
      ...form,
      [input]: e.target.value,
    });
  };

  const submitForm = e => {
    e.preventDefault();
    POST("categories", form).then(data => {
      console.log(data);
      if (data.status === 201) {
        setShowModal(false);
        getData();
      }
    });
  };

  const editForm = e => {
    e.preventDefault();
    PUT("categories", form, "/" + data.id).then(data => {
      console.log(data);
      if (data.status === 200) {
        setShowModal(false);
        getData();
      }
    });
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        value={form.name}
        onChange={e => handleForm("name", e)}
        placeholder="Category"
      />
      <input
        type="text"
        value={form.image}
        onChange={e => handleForm("image", e)}
        placeholder="Link image"
      />

      {edit ? (
        <button type="submit" onClick={e => editForm(e)}>
          edit
        </button>
      ) : (
        <button type="submit"  className={styles.button} onClick={e => submitForm(e)}>
          done
        </button>
      )}
    </form>
  );
};

export default CategoryForm;