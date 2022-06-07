import React from "react";
import Item from "./Item";

import styles from "./Items.module.css";

import dummy_items from "./dummy_items";

function Items() {

  const availableItems = dummy_items.map(item => {
    return <Item key={item.id} item={item}/>
  })

  return (
    <div className={styles.items}>
      <ul>
        {availableItems}
      </ul>
    </div>
  );
}

export default Items;
