import React from 'react'
import styles from "./menu.module.css"
import Image from 'next/image'
import Link from 'next/link'
import MenuPosts from '../menuPost/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

function Menu() {
  return (
    <main className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className={styles.subtitle}>Discover by topics</h2>
      <h1 className={styles.title}>Categories</h1>
     

{/* sjflkasj klfjasklfjasklfjklasfjklsdfj */}


<h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuCategories />
      <MenuPosts withImage={true} />
     
    </main>
  )
}

export default Menu