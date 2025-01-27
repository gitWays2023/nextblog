import React from 'react'
import styles from "./pagination.module.css"

function Pagination() {
  return (
   <main className={styles.container}>
<button className={styles.button}>Previous</button>
<button className={styles.button}>Next</button>
   </main>
  )
}

export default Pagination