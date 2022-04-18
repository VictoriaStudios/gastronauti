import styles from '../styles/Introduction.module.css'
import Image from 'next/image'
import Button from './Button'
import { scrollTo } from '../utilities/scrollTo'

const Introduction = (props) => {
    return (
        <section className={styles.introWrapper}>
            <h1 className={styles.introTitle}>The All-In-One-Solution</h1>
            <h2 className={styles.introTitle}>Tailored for Restaurants and Hotels</h2>
            <div className={styles.introContent}>
                <div className={styles.introVideo}>
                    <Image
                        src='/video-placeholder.png'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className={styles.introText}>
                    <h3>Do you want to handle processes more efficiently in your business? Do you want to automate processes and increase your revenue? How about optimizing your personnel cost and making your patrons happy? Do you want to free up more time to care for your guests?</h3>
                    <h3>Gastronauti has you covered!</h3>
                    <Button onClick={() => scrollTo(props.scrollRef)}>Get to know us now</Button>
                </div>
            </div>
        </section>
    )
}

export default Introduction