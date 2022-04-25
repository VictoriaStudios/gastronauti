import React from 'react'
import { Card } from './Card'
import Carousel from './Carousel'
import Quote from './Quote'
import { quotes } from './content/quotes'

const Empfehlungen = (props) => {
  return (
    <div>
      <Carousel>
        {Object.keys(quotes).map ((item, index) => (
          <Card key={`quote${index}`} noHover={true} imgWidth={150} cardWidth={400} src={quotes[item].icon}><Quote quote={quotes[item].text} author={quotes[item].author} /> </Card>
        ))}
      </Carousel>
    </div>
  )
}

export default Empfehlungen