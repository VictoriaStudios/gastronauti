import styles from '../styles/Carousel.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const Carousel = (props) => {
  const [currElements, setCurrElements] = useState([])
  const [shownIndex, setShownIndex] = useState (0)
  let preppedArray = []


  const handleNext = () => {
    console.log ("click")
    console.log (currElements.length)
    console.log (preppedArray.length)
    if (currElements.length<1 || preppedArray.length < 1) return
    console.log ("Here?")
    if (preppedArray.length > shownIndex+1) {
      console.log ("clock")
      setShownIndex(shownIndex+1)
      setCurrElements (preppedArray[shownIndex])
    }
  }

  useEffect(() => {
    if (props.children) {
      //create a two dimensional array, where the first dimension is the index of the three elements to be shown
      let currIndex = -1
      for (let i = 0; i < props.children.length; i++) {
        if (i % 3 === 0) {
          currIndex++
          preppedArray.push(props.children.slice(i, i + 3))
        }
      }
      setCurrElements(preppedArray[shownIndex])
    }


  }, [props.children])


  return (
    <section className={styles.carouselWrapper}>
      <div className={styles.carouselBody}>
        <Image className={styles.carouselArrow}
          src='/carousel_arrow.svg'
          width={50}
          height={50}
        />
        {currElements && currElements.length > 1 ? (
          currElements.map((element) => (
            <>
              {element}
            </>
          ))
        ) : ''}
        <Image
          onClick={handleNext} 
          className={styles.carouselArrow}
          style={{ transform: 'rotateY(180deg)' }}
          src='/carousel_arrow.svg'
          width={50}
          height={50}
        />
      </div>
    </section>
  )
}

export default Carousel