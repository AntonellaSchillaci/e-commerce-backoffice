import { useEffect, useState } from "react";
import { DELETE, GET } from "../../libs/HTTP";
import LiProduct from "../liProduct";
import styles from "./styles.module.scss"

const Products = () => {
  const [products, setProducts] = useState([]);

  const reloadItems = () => {
    GET("products").then(data => {
      console.log(data);
      setProducts(data);
    });
  };

  useEffect(() => {
    reloadItems();
  }, []);

  const deleteElement = id => {
    DELETE("products", id).then(data => {
      if (data.status === 200) {
        reloadItems();
      }
    });
  };

  return (
    <div className={styles.main}>
        <h1>Products</h1>
      <ul>
        {products.map((item, index) => (
          <LiProduct
            reloadItems={reloadItems}
            deleteElement={deleteElement}
            item={item}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;