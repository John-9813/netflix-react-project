import { Container, Navbar, Nav } from "react-bootstrap";


const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container fluid>
        <Navbar.Brand href="#">
         <img src={require('../assets/logo.png').default} alt="Logo" /> {/* non viene visualizzato e non ne capisco il motivo */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="fw-bold">Home</Nav.Link>
            <Nav.Link href="#" className="fw-bold">TV Shows</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Movies</Nav.Link>
            <Nav.Link href="#" className="fw-bold">Recently Added</Nav.Link>
            <Nav.Link href="#" className="fw-bold">My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold">KIDS</div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;