import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNavBar = () =>{

    return (
        <Navbar bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand >Cristina's Info</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Word Cloud</Nav.Link>
            <Nav.Link href="#pricing">Barras</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default MyNavBar;