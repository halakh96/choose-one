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
        <Row className="mt-5 justify-content-center">
          <Col>
              <Form.Select
                size="lg"
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
export default Loggin;
