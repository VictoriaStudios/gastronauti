import styles from '../styles/More.module.css'
import { Card } from './Card'

const More = (props) => {
  const width="450px"


  return (
    <div className={styles.moreWrapper}>
        <Card width={width} src='/icon-cogs.png'> <h4>Module & Erweiterungen</h4> </Card>
        <Card width={width} src='/icon-newspaper.png'> <h4>Gastronomie-Konzepte</h4> </Card>
        <Card width={width} src='/icon-restaurant.png'> <h4>Blog & Kundenstimmen</h4> </Card>
    </div>
  )
}

export default More