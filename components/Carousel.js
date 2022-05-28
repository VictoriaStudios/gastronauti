import styles from '../styles/Carousel.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Transition from 'react-transition-group/cjs/Transition'
import useWindowDimensions from './utils/useWindowDimensions'

const Carousel = (props) => {
  const [allElements, setAllElements] = useState([])
  const [currElements, setCurrElements] = useState([])
  const [shownIndex, setShownIndex] = useState(0)
  const [showElements, setShowElements] = useState(true)
  const [visAmount, setVisAmount] = useState (3)
  const {width, height} = useWindowDimensions()
  const transTime = 300

  const handleNext = () => {
    if (currElements.length < 1 || allElements.length < 1) return
    if (allElements.length > shownIndex + 1) {
      setShowElements(false)
      setTimeout(() => {
        setCurrElements(allElements[shownIndex + 1])
        setShownIndex(shownIndex + 1)
        setShowElements(true)
      }, transTime)
    }
  }

  const handlePrev = () => {
    if (currElements.length < 1 || allElements.length < 1) return
    if (shownIndex > 0) {
      setShowElements(false)
      setTimeout(() => {
        setCurrElements(allElements[shownIndex - 1])
        setShownIndex(shownIndex - 1)
        setShowElements(true)
      }, transTime)
    }
  }

  useEffect(() => {
    let newVisAmount = 3
    if (width < 1000) newVisAmount = 2
    if (width < 700) newVisAmount = 1
    if (props.children) {
      //create a two dimensional array, where the first dimension is the index of the current elements to be shown
      let preppedArray = []
      for (let i = 0; i < props.children.length; i++) {
        if (i % newVisAmount === 0) {
          preppedArray.push(props.children.slice(i, i + newVisAmount))
        }
      }
      setAllElements(preppedArray)
      if (newVisAmount !== visAmount) {
        setCurrElements(preppedArray[0])
        setShownIndex (0)
      }
      else {
        setCurrElements (preppedArray[shownIndex])
      }
      setVisAmount(newVisAmount)
      
    }


  }, [props.children, width])



  return (
    <section className={styles.carouselWrapper}>
      <div className={styles.carouselBody}>
        <Image
          onClick={handlePrev}
          className={styles.carouselArrow}
          src='/carousel_arrow.svg'
          width={50}
          height={50}
        />
        <Transition in={showElements} timeout={transTime} style={{flexGrow:'1'}}>
          {state => (
            <>
              {currElements && currElements.length > 0 ? (
                currElements.map((element, index) => (
                  <div key={`card${index}`}
                    style={{
                      transition: `all ${transTime}ms ease-in`,
                      opacity: state === 'entered' ? 1 : 0
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