import styles from "./styles.module.scss";
import RefreshBtn from "../refreshBtn";
import EditBtn from "../editBtn";
import DeleteBtn from "../deleteBtn";

const Table = ({ categoriesState, getData, loading }) => {
  return (
    <div className={styles.main}>
      <div className={styles.tableHead}>
      <RefreshBtn getData={getData} />
      </div>
      {loading ? (
        "Loading..."
      ) : (
        <div className={styles.tableBody}>
          {categoriesState.map(item => (
            <div className={styles.tableRow} key={item.id}>
              <p>{item.id}</p>
              <img src={item.image} alt={item.name} />
              <p>{item.name.substring(0,10)}</p>
              <div className={styles.btnSet}>
                <EditBtn />
                <DeleteBtn />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;