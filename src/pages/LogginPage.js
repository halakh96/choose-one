import { useDispatch, useSelector } from "react-redux";
import { getInitialData, selectActiveUser } from "../actions";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function LogginPage() {
  const users = useSelector((state) => state.users);
  const activeUser = useSelector((state) =>state.activeUser);
  console.log(activeUser, "activeUser");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData(dispatch));
  }, []);

  const handleChange = (e) => {
    dispatch(selectActiveUser(Object.values(users).filter(user=>user.id == e.target.value)));
  };
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col>
            <Form.Select size="lg" onChange={(e)=>{handleChange(e)}}>
              <option>Choose Your Account .. </option>
              {Object.values(users).map((user, i) => {
                return (
                  <option key={i} value={user.id}>
                    {user.fullname}
                  </option>
                );
              })}
            </Form.Select>
          </Col>
          <Col>
            <Link to="/Home">
              <Button variant="dark" size="lg">
                Log In
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default LogginPage;
