'use client'

import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

function AuthLink() {
  const [open, setOpen] = useState(false)
  const {status} = useSession()
  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href="/login">Login</Link>
      ) :
        (
          <>
            <Link href="/write">Write</Link>
            <span className={styles.link} onClick={signOut}>Logout</span>
          </>
        )
      }

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

{open && (
  <div className={styles.responsiveMenu}
style={{display:open && "flex"}}
  >
<Link href='/'>HomePage</Link>
<Link href='/'>About</Link>
<Link href='/'>Contact</Link>

{status === 'unauthenticated' ? (
        <Link href="/login">Login</Link>
      ) :
        (
          <>
            <Link href="/write">Write</Link>
            <span className={styles.link} onClick={signOut}>Logout</span>
          </>
        )
      }
</div>
)}

    </>
  )
}

export default AuthLink