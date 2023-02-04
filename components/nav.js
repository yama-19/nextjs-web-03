import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }
  const closeNav = () => {
    setNavIsOpen(false)
  }

    return (
      <nav className={navIsOpen ? styles.open : styles.close}>
        <button className={styles.btn} onClick={toggleNav}>
          MENU
        </button>
        <ul className={styles.list}>
        <li>
                <Link href="/">
                 <a onClick={closeNav}>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                <a onClick={closeNav}>About</a>
                </Link>
            </li>
            <li>
                <Link href="/recruit">
                <a onClick={closeNav}>Recruit</a>
                </Link>
            </li>
        </ul>
      </nav>
    )
}