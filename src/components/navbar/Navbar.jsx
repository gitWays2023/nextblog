import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import ThemeToggle from '../themeToggle/ThemeToggle'
import Link from 'next/link'
import AuthLink from '../authLinks/AuthLink'

function Navbar() {
  return (
   <main className={styles.container}>
  <div className={styles.social}>
    <Image src="/facebook.png" alt='facebook' width={24} height={24} />
    <Image src="/instagram.png" alt='Instagram' width={24} height={24} />
    <Image src="/tiktok.png" alt='tiktok' width={24} height={24} />
    <Image src="/youtube.png" alt='youtube' width={24} height={24} />

  </div>
  <div className={styles.logo}>Lamablog</div>
  <div className={styles.links}>
    <ThemeToggle />
    <Link href="/" className={styles.link}>HomePage</Link>
    <Link href="/" className={styles.link}>Contact</Link>
    <Link href="/" className={styles.link}>About</Link>
    <AuthLink />


  </div>
   </main>
  )
}

export default Navbar