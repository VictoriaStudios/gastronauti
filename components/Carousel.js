import styles from '../styles/Carousel.module.css'
import { useEffect, useState } from 'react'

const Carousel = (props) => {
  const [currElements, setCurrElements] = useState([])

  useEffect(() => {
    if (props.children) {

      //create a two dimensional array, where the first dimension is the index of the three elements to be shown
      let preppedArray = []
      let currIndex = -1
      for (let i = 0; i < props.children.length; i++) {
        if (i % 3 === 0) {
          currIndex++
          preppedArray.push(props.children.slice(i, i + 3))
        }
      }
      setCurrElements(preppedArray[0])
    }


  }, [props.children])


  return (
    <section className={styles.carouselWrapper}>
      <div className={styles.carouselBody}>
        {currElements && currElements.length > 1 ? (
          currElements.map((element) => (
            <>
              {element}
            </>
          ))
        ) : ''}




      </div>
    </section>
  )
}

export default Carousel