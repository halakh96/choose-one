import NavBar from "../componenet/NavBar";
import Form from "react-bootstrap/Form";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewQuestion, addQuestionCreator } from "../actions";
import { addQuestion } from "../DATA";
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
    navigate("/Home");
  };

  return (
    <>
      <NavBar />
      <Container>
      <Card
        className="m-5 p-4 text-center"
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
      </Container>
    </>
  );
}

export default AddQuestion;
