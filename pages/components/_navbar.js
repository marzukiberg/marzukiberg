import { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const AppNavbar = () => {
  useEffect(() => {
    window.onscroll = () => loadNavbar();
  }, []);
  const loadNavbar = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const navbar = document.querySelector(".navbar");
    if (scrollY > windowHeight) {
      navbar.classList.add("show");
    } else {
      navbar.classList.remove("show");
    }
  };
  return (
    <Navbar
      bg="white"
      variant="light"
      className="navbar shadow"
      fixed="top"
      expand="lg"
    >
      <Container className="py-1">
        <Navbar.Brand href="#home">Marzuki</Navbar.Brand>
        <Navbar.Toggle aria-controls="app-navbar" />
        <Navbar.Collapse id="app-navbar">
          <Nav className="ml-auto nav">
            <Nav.Link className="nav-link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link" href="#specializing">
              Specializing
            </Nav.Link>
            <Nav.Link className="nav-link" href="#portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="nav-link" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
