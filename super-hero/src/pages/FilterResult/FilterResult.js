import HeroCard from '../../components/HeroCard/HeroCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function FilterResult(props) {
  const { superheroData = [] } = props

  console.log('superheroData', superheroData)
  return (
    <Container style={{ margin: '50px 0 0 0' }}>
      <Row xs={'auto'} md={'auto'} className="g-4">
        {superheroData.map((superhero) => (
          <HeroCard data={superhero} />
        ))}
      </Row>
    </Container>
  )
}

export default FilterResult
