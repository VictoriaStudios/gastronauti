import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { scrollTo } from '../utilities/scrollTo'

export const Card = (props) => {
    return (
        <section onClick={() => scrollTo(props.scrollRef || '')}>
            <div className={styles.cardWrapper} style={{ width: props.cardWidth || '' }}>
                <div className={styles.cardBody}>
                    <div className={styles.cardImage}>
                        {props.src ? <Image
                            src={props.src}
                            height={props.imgWidth || 100}
                            width={props.imgWidth || 100}
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




