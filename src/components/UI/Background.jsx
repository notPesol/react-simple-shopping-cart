import React from 'react'

import image from "../../assets/top-view-fresh-delicious-vietnamese-food-table.jpg"
import styles from "./Background.module.css"

const Background = () => {
  return (
    <div className={styles.background}>
      <img src={image} alt="some food..." />
    </div>
  )
}

export default Background