import styles from '../styles/Quote.module.css'

const Quote = (props) => {
    return (
        <>
            <section className={styles.quoteWrapper}>
                <h4 className={styles.quote}>{props.quote || ''}</h4>
                <h4 className={styles.author}>{props.author || ''}</h4>
            </section>
        </>
    )
}

export default Quote