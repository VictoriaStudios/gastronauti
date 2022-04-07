import styles from '../styles/Carousel.module.css'
import { useEffect, useState } from 'react'

const Carousel = (props) => {

  useEffect(() => {
    if (props.children) {
      let arrayCount = (props.children.length % 3) + 1
      console.log (arrayCount)

    }

  
  }, [props.children])
  

  return (
    <section className={styles.carouselWrapper}>
        <div className={styles.carouselBody}>
            {/* {props.children} */}
            {props.children.map((element) => (
              <>
              {element}
              </>
            ))}
        </div>
    </section>
  )
}

export default Carousel