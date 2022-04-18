import styles from '../styles/Kassensystem.module.css'
import Button from './Button'
import Image from 'next/image'
import { scrollTo } from '../utilities/scrollTo'

const Kassensystem = (props) => {
    return (
        <section className={styles.kassenWrapper}>
            <h1 className={styles.kassenTitle}>Gastronauti Checkout</h1>
            <h2 className={styles.kassenTitle}> Versatile & Expandable </h2>
            <div className={styles.kassenContent}>
                <div className={styles.kassenImage}>
                    <Image
                        src='/video-placeholder.png'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className={styles.kassenText}>
                    Modular and flexible: The Gastronauti checkout system is at the heart of your business! It organizes guest orders, stock, relays orders to the kitchen, books room and much, much more.
                    <div>
                        <Button onClick={() => scrollTo(props.scrollRef)}>contact us now!</Button>
                    </div>
                </div>
                {/* Finish this button action once a page is done */}
            </div>
        </section>
    )
}

export default Kassensystem