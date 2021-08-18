import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>SuperHero API</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Created by <a href="https://github.com/ZanalikSL">Bruno Senna</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar
