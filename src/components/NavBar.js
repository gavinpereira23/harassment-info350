import {Link, NavLink} from 'react-router-dom';
import {Navbar, Container, Nav, Col, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"

export function NavBar(){
  return(
      <Navbar className="color-nav mb-3" collapseOnSelect expand="lg" variant="dark" fixed="top">
      <Container>
          <LinkContainer to="./Welcome">
              <Navbar.Brand className="nav-brand pt-2.5">&lt;/ Harassment &gt;</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to="./Welcome">
                    <Nav.Link>Welcome</Nav.Link>
                </LinkContainer>
                <LinkContainer to="./Stats">
                    <Nav.Link>Statistics</Nav.Link>
                </LinkContainer>
              <Nav.Link href="#">Forum</Nav.Link>

            </Nav>
            <Nav>
              <Nav.Link href="https://uw.edu">UW</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Other Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>

);
}
