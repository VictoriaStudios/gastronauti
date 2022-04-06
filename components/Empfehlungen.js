import React from 'react'
import { Card } from './Card'
import Carousel from './Carousel'

const Empfehlungen = (props) => {
  return (
    <div>
        <Carousel>
            <Card width={400} src='/icon-cogs.png'>Gastronauti rockt</Card>
            <Card>So eine geile Firma</Card>
            <Card>Er ist guter Junge</Card>
        </Carousel>
    </div>
  )
}

export default Empfehlungen