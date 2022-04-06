import styles from '../styles/Kassensystem.module.css'
import Button from './Button'
import Image from 'next/image'
import { scrollTo } from '../utilities/scrollTo'

const Kassensystem = (props) => {
    return (
        <section className={styles.kassenWrapper}>
            <h1 className={styles.kassenTitle}>gastronauti Kassensystem</h1>
            <h2 className={styles.kassenTitle}> Vielseitig & Erweiterbar </h2>
            <div className={styles.kassenContent}>
                <div className={styles.kassenImage}>
                    <Image
                        src='/video-placeholder.png'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className={styles.kassenText}>
                    Modular, schnell und flexibel: Das gastronauti Kassensystem ist das Herz Ihres Betriebs und steuert genau das, was Sie möchten. Inklusive Cloud-Support & Küchenmonitor!
                    <div>
                        <Button onClick={() => scrollTo(props.scrollRef)}>Jetzt Anfrage stellen</Button>
                    </div>
                </div>
                {/* Finish this button action once a page is done */}
            </div>
        </section>
    )
}

export default Kassensystem