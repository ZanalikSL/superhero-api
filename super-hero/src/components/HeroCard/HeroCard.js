import { useState } from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ProgressBar from 'react-bootstrap/ProgressBar'

const HeroCard = (props) => {
  const { data } = props
  const [show, setShow] = useState(false)

  return (
    <Card style={{ width: '18rem', margin: '1%' }}>
      <Card.Img variant="top" src={data.image.url} alt="super pic" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.biography['full-name']}</Card.Text>
      </Card.Body>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Força 
        {<ProgressBar 
          now={data.powerstats.strength !== "null" ? data.powerstats.strength : 0} 
          label={data.powerstats.strength !== "null" ? data.powerstats.strength : 0}/>
        }
          </li>
        <li class="list-group-item"> Velocidade 
        {<ProgressBar 
          now={data.powerstats.speed !== "null" ? data.powerstats.speed : 0} 
          label={data.powerstats.speed !== "null" ? data.powerstats.speed : 0}/>
        }
          </li>
        <li class="list-group-item"> Poder 
        {<ProgressBar 
          now={data.powerstats.power !== "null" ? data.powerstats.power : 0} 
          label={data.powerstats.power !== "null" ? data.powerstats.power : 0}/>
        }
          </li>
      </ul>
      <Card.Body>
        <Button variant="primary" onClick={() => setShow(true)}>
          Informações completas
        </Button>
      </Card.Body>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {data.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4>Powerstats</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"> Intelligence: {data.powerstats.intelligence}</li>
              <li class="list-group-item"> Strength: {data.powerstats.strength}</li>
              <li class="list-group-item"> Speed: {data.powerstats.speed}</li>
              <li class="list-group-item"> Durability: {data.powerstats.durability}</li>
              <li class="list-group-item"> Power: {data.powerstats.power}</li>
              <li class="list-group-item"> Combat: {data.powerstats.combat}</li>
            </ul>
          </div>
          <div>
            <h4>Biografia</h4>
            <p>Nome commpleto: {data.biography['full-name']}</p>
            <p>Alter-egos: {data.biography['alter-egos']}</p>
            <p>Aliados: {data.biography.aliases.join(', ')}</p>
            <p>Local de nascimento: {data.biography['place-of-birth']}</p>
            <p>Primeira aparição: {data.biography['first-appearance']}</p>
            <p>Editora: {data.biography.publisher}</p>
            <p>Alinhamento: {data.biography.alignment}</p>
          </div>
          <div>
            <h4>Aparência</h4>
            <p>Gênero sexual: {data.appearance.gender}</p>
            <p>Raça: {data.appearance.race}</p>
            <p>Altura: {data.appearance.height.join(' / ')}</p>
            <p>Peso: {data.appearance.weight.join(' / ')}</p>
            <p>Cor do olho: {data.appearance['eye-color']}</p>
            <p>Cor do cabelo: {data.appearance['hair-color']}</p>
          </div>
          <div>
            <h4>Trabalho</h4>
            <p>Ocupação: {data.work.occupation}</p>
            <p>Base: {data.work.base}</p>
          </div>
          <div>
            <h4>Conexões</h4>
            <p>Afiliação de grupo: {data.connections['group-affiliation']}</p>
            <p>Parentes: {data.connections.relatives}</p>
          </div>
        </Modal.Body>
      </Modal>
    </Card>
  )
}

export default HeroCard
