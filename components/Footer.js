import styles from '../styles/Footer.module.css'
import { scrollTo } from '../utilities/scrollTo'


const Footer = (props) => {
    return (
        <footer className={styles.footerWrapper}>
            <a className={styles.navElement} onClick={() => scrollTo(props.scrollRefs.kassenRef)}> Modules </a>
            <a className={styles.navElement} onClick={() => scrollTo(props.scrollRefs.blogRef)}> Blog </a>
            <a className={styles.navElement} onClick={() => scrollTo(props.scrollRefs.empfehlungsRef)}> Recommendations </a>
            <a className={styles.navElement} onClick={() => scrollTo(props.scrollRefs.kontaktRef)}> Contact </a>
        </footer>
    )
}

export default Footer