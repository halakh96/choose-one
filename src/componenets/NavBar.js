import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useSelector } from "react-redux";


const NavBar = () => {
    const user = useSelector((state)=>state);
    console.log(user,"state");
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Leader Board </Nav.Link>
            <Nav.Link href="#">Add Question</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="me-2">
              Signed in as : <a href="#">userName</a>
            </Navbar.Text>
           <Link to="/"><Button variant="outline-secondary">Log Out</Button></Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
