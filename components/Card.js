import Image from 'next/image'
import styles from '../styles/Card.module.css'


export const Card = (props) => {
    return (
        <section>
            {console.log (props.width)}
        <div className={styles.cardWrapper} style={{ width: props.width }}>
            <div className={styles.cardBody}>
                <div className={styles.cardImage}>
                    {props.src ? <Image
                        src={props.src}
                        // layout='fill'
                        // objectFit='contain'
                        height={props.width}
                        width={props.width}
                    /> : ''}
                </div>
                <div className={styles.cardText}>
                        {props.children}
                </div>
            </div>
        </div>
        </section>
    )
}




