import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useSelector } from "react-redux";



const NavBar = () => {
  const activeUserInfo = useSelector((state)=>state.activeUser);
  console.log(activeUserInfo,"activeUserInfo");
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/LeaderBoard">Leader Board </Nav.Link>
            <Nav.Link href="/AddQuestion">Add Question</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          {Object.values(activeUserInfo).map((info,i)=>{
             return (
              <Navbar.Text className="me-2">
                    Signed in as : <a>{info.fullname}</a>
            </Navbar.Text>
             );
            })}
           <Link to="/"><Button variant="outline-secondary">Log Out</Button></Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;


