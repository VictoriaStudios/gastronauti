import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { scrollTo } from '../utilities/scrollTo'

export const Card = (props) => {
    return (
        <section onClick={() => scrollTo(props.scrollRef || '')}>
            <div className={styles.cardWrapper} style={{ width: props.width }}>
                <div className={styles.cardBody}>
                    <div className={styles.cardImage}>
                        {props.src ? <Image
                            src={props.src}
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




