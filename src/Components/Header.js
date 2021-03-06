import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ToggleButton from "./ToggleButton";

const Header = ({ themeColors, toggleTheme }) => {
  return (
    <div className="navbar-container">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
        <Navbar.Brand>Felipe Melgaço Magesty</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#project-cards">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ToggleButton themeColors={themeColors} toggleTheme={toggleTheme} />
      </Navbar>
    </div>
  );
};

export default Header;
