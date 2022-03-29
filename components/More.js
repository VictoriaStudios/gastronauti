import styles from '../styles/More.module.css'
import { Card } from './Card'

const More = (props) => {
  const width="450px"


  return (
    <div className={styles.moreWrapper}>
        <Card width={width}/>
        <Card width={width}/>
        <Card width={width}/>
    </div>
  )
}

export default More