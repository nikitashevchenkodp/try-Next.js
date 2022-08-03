import A from './A'
import styles from '../styles/NavBar.module.scss'


const NavBar = () => {
  return (
    <div className={styles.navBar}>
        <A href="/" text = "Main" />
        <A href="/users" text = "Users" />
    </div>
  )
    //Comment
}

export default NavBar;