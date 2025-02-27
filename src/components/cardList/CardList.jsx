import React from 'react'
import styles from "./cardList.module.css"
import Pagination from '../paginatnion/Pagination'
import Card from '../card/Card'


const getData = async (page)=>{
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`,{
    cache:"no-store"
  })
  if(!res.ok){
    throw new Error("Failed")
  }
  return res.json()
}


async function CardList({page}) {
  const data = await getData(page)
  return (
   <main className={styles.container}>
    <h1 className={styles.title}>Recent Posts</h1>
    <div className={styles.posts}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  <Pagination />
   </main>
  )
}

export default CardList