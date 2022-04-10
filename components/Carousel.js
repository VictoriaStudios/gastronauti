import styles from '../styles/Carousel.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Transition from 'react-transition-group/cjs/Transition'
import Button from './Button'

const Carousel = (props) => {
  const [allElements, setAllElements] = useState([])
  const [currElements, setCurrElements] = useState([])
  const [shownIndex, setShownIndex] = useState(0)
  const [showElements, setShowElements] = useState(true)
  const [showTest, setShowTest] = useState(false)
  const transTime = 300

  const handleNext = () => {
    if (currElements.length < 1 || allElements.length < 1) return
    if (allElements.length > shownIndex + 1) {
      setShowElements(false)
      setTimeout(() => {
        setCurrElements(allElements[shownIndex + 1])
        setShownIndex(shownIndex + 1)
        setShowElements(true)
      }, 300)
    }
  }

  const handlePrev = () => {
    if (currElements.length < 1 || allElements.length < 1) return
    if (shownIndex > 0) {
      setCurrElements(allElements[shownIndex - 1])
      setShownIndex(shownIndex - 1)
    }
  }

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
      setCurrElements(preppedArray[shownIndex])
      setAllElements(preppedArray)
    }


  }, [props.children])



  return (
    <section className={styles.carouselWrapper}>
      <Button onClick={() => setShowTest(!showTest)}>Toggle</Button>
      <div className={styles.carouselBody}>
        <Image
          onClick={handlePrev}
          className={styles.carouselArrow}
          src='/carousel_arrow.svg'
          width={50}
          height={50}
        />
        <Transition in={showElements} timeout={300}>
          {state => (
            <>
              <p>{state}</p>
              {currElements && currElements.length > 0 ? (
                currElements.map((element) => (
                  <div style={{
                    transition: 'opacity 0.3s ease-in',
                    opacity: state === 'entering' ? 0.5
                      : state === 'entered' ? 1
                        : state === 'exiting' ? 0
                          : state === 'exited' ? 0 : null
                  }}>
                    {element}
                  </div>
                ))
              ) : ''}
            </>
          )}
        </Transition>
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