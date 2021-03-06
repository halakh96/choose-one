import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavBar = () => {
  const activeUserInfo = useSelector((state) => state.activeUser);
  return (
    <>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink to="/Home" className="nav-link">Home</NavLink>
            <NavLink to="/LeaderBoard" className="nav-link">Leader Board</NavLink>
            <NavLink to="/AddQuestion" className="nav-link">Add Question</NavLink>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Text className="justify-content-end">
            {Object.values(activeUserInfo).map((info, i) => {
              return (
                <Navbar.Text key={i} className="me-2">
                  Signed in as : <a>{info.fullname}</a>
                </Navbar.Text>
              );
            })}
            <Link to="/">
              <Button variant="outline-secondary">Log Out</Button>
            </Link>
          </Navbar.Text>
          </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
