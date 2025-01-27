"use client"

import React, { useContext, useEffect } from 'react'
import styles from "./themetoggle.module.css"
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const {theme,toggle, setTheme} = useContext(ThemeContext)

  return (
    <div
    className={styles.container}
    onClick={toggle}
    style={
      theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
    }
  >
    <Image src="/moon.png" alt="" width={14} height={14} />
    <div
      className={styles.ball}
      style={
        theme === "dark"
          ? { left: "1px", background: "#0f172a" }
          : { right: "1px", background: "white" }
      }
    ></div>
    <Image src="/sun.png" alt="" width={14} height={14} />
  </div>
  )
}
