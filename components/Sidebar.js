import Transition from "react-transition-group/cjs/Transition"
import styles from '../styles/Sidebar.module.css'

const Sidebar = (props) => {
  return (
    <aside className={styles.sidebarWrapper}>
      {props.children}
    </aside>
  )
}

export default Sidebar