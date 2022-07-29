import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import useAuth from '../context/useAuth';

function Header() {
  const {auth}=useAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Ayurvedic Medicine</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* me-auto */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            {auth?<Nav.Link as={Link} to={'myorder/'+auth.userId}>My Order</Nav.Link>:""}
            {(auth?.role==="admin")?<Nav.Link as={Link} to={'medicines'}>Medicines</Nav.Link>:""}
            {(auth?.role==="admin")?<Nav.Link as={Link} to={'myorder'}>All Orders</Nav.Link>:""}
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={'about'}>About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'contact'}>Contact Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={'career'}>Career</NavDropdown.Item>
            </NavDropdown>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Nav>
          {!auth?<Button variant="outline-success" as={Link} to={'signin'}>Sign In</Button>:<Button variant="outline-success" as={Link} to={'signout'}>Sign Out</Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;