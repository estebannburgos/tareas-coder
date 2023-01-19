import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import CartWidget from './CartWidget';

const navBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src=
              "img/logo2.png"
            alt='logo'
              />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/electronics">Electrónica</Nav.Link>
            <Nav.Link href="/jewelery">Joyería</Nav.Link>
            <Nav.Link href="/mensClothing">Ropa de hombre</Nav.Link>
            <Nav.Link href="/womensClothing">Ropa de mujer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default navBar;