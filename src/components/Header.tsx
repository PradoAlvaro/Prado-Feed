import styles from './Header.module.css'

import logo from '../assets/logo.svg'
console.log(logo)
export function Header() {
  return (
    <header className={styles.header}>
       <img src= {logo} alt="logotipo"/>
    </header>
  )
}