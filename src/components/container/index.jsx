import { useState } from "react";
import NavBar from "../navbar";
import Home from "./../home";
import Categories from "../categories";
import Products from "../products";
import styles from './styles.module.scss'

const Container = () => {
  const [route, setRoute] = useState("home");

    return (
      <div className={styles.main}>
        <div className={styles.sxColumn}>
          <NavBar  setRoute={setRoute}/>
        </div>
        <div className={styles.dxColumn}>
        {route === "home" && <Home />}
        {route === "categories" && <Categories />}
        {route === "products" && <div><Products /></div>}
        {route === "orders" && <div>Orders</div>}
        {route === "users" && <div>Users</div>}
        </div>
      </div>
    );
  };
  
  export default Container;