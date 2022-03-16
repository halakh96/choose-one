import NavBar from "../componenet/NavBar";
import Form from "react-bootstrap/Form";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewQuestion } from "../actions";
import { useNavigate } from "react-router";

function AddQuestion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeUser = useSelector((state) => state.activeUser);

  const handleSubmit = (e) => {
    const question = {
      creator: activeUser[0].id,
      answerOne: e.target.option1.value,
      answerTwo: e.target.option2.value,
    };
    e.preventDefault();
    dispatch(addNewQuestion(question));
    navigate("/home");
  };

  return (
    <>
      <NavBar />
      <Container>
        <Row className="justify-content-center">
          <Card
            className="m-2 mt-5 p-4 text-center"
            border="dark"
            style={{ width: "25rem" }}
          >
            <Form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Form.Group className="mb-3" controlId="firstOption">
                <Form.Control
                  type="text"
                  placeholder="First Option"
                  name="option1"
                  required={true}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="secondOption">
                <Form.Control
                  type="text"
                  placeholder="Second Option"
                  name="option2"
                  required={true}
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default AddQuestion;
