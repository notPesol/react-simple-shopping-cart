import React from "react";

import styles from "./Item.module.css";
import ItemForm from "./ItemForm";

const Item = (props) => {

  const {item} = props;

  return (
    <li className={styles.item}>
      <div>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>${item.price}</p>
      </div>
      <ItemForm item={item}/>
    </li>
  );
};

export default Item;
