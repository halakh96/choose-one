import { useDispatch, useSelector } from "react-redux";
import { getInitialData, selectActiveUser } from "../actions";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Loggin() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData(dispatch));
  }, []);
  
  const handleChange = (e) => {
    dispatch(
      selectActiveUser(
        Object.values(users).filter((user) => user.id == e.target.value)
      )
    );
  };
  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
              <Form.Select
                size="lg"
                className="mb-2"
                onChange={(e) => {
                  handleChange(e);
                }}
              >
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
          <Col md={2}>
            <Link to="/Home">
              <Button className="w-100 mb-2"variant="dark" size="lg">
                 Log In  
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Loggin;
