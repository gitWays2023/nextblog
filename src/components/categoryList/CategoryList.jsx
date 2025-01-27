import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'


const getData = async ()=>{
  const res = await fetch("http://localhost:3000/api/categories",{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed")
  }
  return res.json()
}

 async function CategoryList() {
const data = await getData()
  
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Popular Category</h1>
      <div className={styles.categories}>

{
  data?.map((item)=>(
     <Link key={item._id} href="/blog?cat=style"  className={`${styles.category} ${styles.style}`}>
    <Image
      src={item.img}
      alt='something'
      width={32}
      height={32}
      className={styles.image}
    />
    {item.title}
  </Link>
  ))
}
   



    

  


      </div>
    </main>
  )
}

export default CategoryList