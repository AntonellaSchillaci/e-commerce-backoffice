import {BsShop} from "react-icons/bs";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <h2 className={styles.logoImg}><BsShop /></h2>
        <h1>E-Commerce</h1>
      </div>
    </div>
  );
};

export default Header;