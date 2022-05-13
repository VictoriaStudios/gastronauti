import styles from '../styles/More.module.css'
import { Card } from './Card'

const More = (props) => {
  const width="150"


  return (
    <div className={styles.moreWrapper}>
        <Card scrollRef={props.kassenRef} width={width} src='/icon-cogs.png'> <h4>Modules</h4> </Card>
        <Card scrollRef={props.kontaktRef} width={width} src='/icon-newspaper.png'> <h4>Contact Us</h4> </Card>
        <Card scrollRef={props.blogRef} width={width} src='/icon-restaurant.png'> <h4>Blog & Customer Voices</h4> </Card>
    </div>
  )
}

export default More