import styles from '../styles/Introduction.module.css'
import Image from 'next/image'

const Introduction = () => {
    return (
        <section className={styles.introWrapper}>
            <h1 className={styles.introTitle}>Die intelligente All-In-One-Lösung</h1>
            <h2 className={styles.introTitle}>Speziell auf die Bedürfnisse der Gastronomie & Hotellerie zugeschnitten</h2>
            <div className={styles.introContent}>
                <div className={styles.introVideo}>
                    <Image
                        src='/video-placeholder.png'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className={styles.introText}>
                    <h3>Sie möchten die Abläufe in Ihrem Betrieb effizienter gestalten? Prozesse automatisieren? Ihren Wareneinsatz senken? Ihren Umsatz steigern? Personalkosten optimieren? Die Gästezufriedenheit steigern? Und möchten am Ende mehr Zeit für Ihre Gäste haben?</h3>
                    <h3>Dann ist gastronauti genau der richtige Partner an Ihrer Seite!</h3>
                </div>
            </div>
        </section>
    )
}

export default Introduction