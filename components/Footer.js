import styles from '../styles/Footer.module.css'
import { scrollTo } from '../utilities/scrollTo'
import Image from 'next/image'


const Footer = (props) => {
    const logoSize = 200
    return (
        <footer className={styles.footerWrapper}>
            <section className={styles.footerBody}>
                <div className={styles.footerLogoWrapper}>
                    <Image
                        src='/logo.png'
                        width={logoSize}
                        height={logoSize}

                    />
                </div>
                <div style={{ width: '10%' }} />
                <div className={styles.footerNav}>
                    <a className={styles.navElement} onClick={() => scrollTo(props.scrollRefs.kassenRef)}> Modules </a>
                    <a className={styles.navElement} onClick={() => scrollTo(props.scrollRefs.blogRef)}> Blog </a>
                    <a className={styles.navElement} onClick={() => scrollTo(props.scrollRefs.empfehlungsRef)}> Recommendations </a>
                    <a className={styles.navElement} onClick={() => scrollTo(props.scrollRefs.kontaktRef)}> Contact </a>
                </div>
            </section>
            <hr style={{ borderColor: '#DBD6CC'}}/>
            <h4 className={styles.footerSignature}>© Marcel Bruna 2022</h4>

        </footer>

    )
}

export default Footer