import Image from 'next/image'
import styles from '../styles/Card.module.css'


export const Card = (props) => {
    return (
        <div className={styles.cardWrapper} style={{ width: props.width }}>
            <div className={styles.cardBody}>
                Card
                {props.src ? <Image
                    src={props.src}
                    layout="fill"
                    objectFit='cover'
                /> : ''}
            </div>
        </div>
    )
}




