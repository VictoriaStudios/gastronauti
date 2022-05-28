import styles from '../styles/Sidebar.module.css'

const Sidebar = (props) => {


  let state = props.transState
  return (
    <aside style={{
      transition: `all 75ms ease-in-out`,
      left: state === 'entering' || state === 'entered' ? 0 : '-83vw'
    }}
      className={styles.sidebarWrapper}>
      <div className={styles.sidebarIcon}>
        <svg onClick={props.onClick} width="20" height="20" version="1.1" viewBox="0 0 13.229 13.229" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#A79878" strokeWidth="1.3229"><path d="m1.6964 2.3806h9.8363" /><path d="m1.6964 6.6146h9.8363" /><path d="m1.6964 10.849h9.8363" /></g></svg>
      </div>
      {props.children}
    </aside>
  )
}

export default Sidebar