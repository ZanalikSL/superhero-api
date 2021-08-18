import { Form, Row, Col } from 'react-bootstrap'

function HeroesFilter(props) {
  const { handleChange, searchText } = props

  return (
    <Form style={{ margin: '1%' }}>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput">Pesquisa por nomes</Form.Label>
        </Col>
        <Col>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            type="search"
            placeholder="Pesquisa de Herois"
            onChange={handleChange}
            value={searchText}
          />
        </Col>
      </Row>
    </Form>
  )
}

export default HeroesFilter
