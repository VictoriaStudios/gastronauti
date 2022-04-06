import styles from '../styles/Carousel.module.css'

const Carousel = (props) => {
  return (
    <section className={styles.carouselWrapper}>
        <div className={styles.carouselBody}>
            {props.children}
        </div>
    </section>
  )
}

export default Carousel