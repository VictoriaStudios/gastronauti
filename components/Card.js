import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { scrollTo } from '../utilities/scrollTo'

export const Card = (props) => {
    let cardBodyStyle = {}
    if (props.noHover && props.noHover === true) cardBodyStyle = {
        pointerEvents: 'none'
    }

    return (
        <section onClick={() => scrollTo(props.scrollRef || '')}>
            <div className={styles.cardWrapper} style={{ maxWidth: props.cardWidth || '' }}>
                <div style={cardBodyStyle} className={styles.cardBody}>
                    <div className={styles.cardImage}>
                        {props.src ? <Image
                            src={props.src}
                            height={props.imgWidth || 100}
                            width={props.imgWidth || 100}
                            alt = {props.alt}
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




