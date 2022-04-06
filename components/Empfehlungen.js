import React from 'react'
import { Card } from './Card'
import Carousel from './Carousel'
import Quote from './Quote'

const Empfehlungen = (props) => {
  return (
    <div>
        <Carousel>
            <Card imgWidth={150} cardWidth={400} src='/icon-cogs.png'><Quote quote='Zuverlässig, schnell und effektiv.' author='Markus Fiedermann, BigBusinessPartner.com'/> </Card>
            <Card imgWidth={150} cardWidth={400} src='/icon-cogs.png'><Quote quote='Die Zusammenarbeit mit gastronauti ist unkompliziert, die Dienstleistungen sehr umfassend.' author='Robert Hauser, Gründwandhotel Freiberg'/> </Card>
            <Card imgWidth={150} cardWidth={400} src='/icon-cogs.png'><Quote quote='Zuverlässig, schnell und effektiv.' author='Markus Fiedermann, BigBusinessPartner.com'/> </Card>
        </Carousel>
    </div>
  )
}

export default Empfehlungen