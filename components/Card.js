import Image from 'next/image'
import styles from '../styles/Card.module.css'
import { useState } from 'react'


export const Card = (props) => {
    const [isReversing, setIsReversing] = useState(false)

    return (
        <section>
            <div className={styles.cardWrapper} style={{ width: props.width }}>
                <div
                    className={styles.cardBody}
                    onMouseEnter={()=> setIsReversing(false)}
                    onMouseLeave={()=> setIsReversing(true)}
                >
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




