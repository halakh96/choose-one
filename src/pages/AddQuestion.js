import NavBar from "../componenet/NavBar";
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewQuestion, addQuestionCreator } from "../actions";

import { addQuestion } from "../DATA";

function AddQuestion() {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.activeUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    addQuestion({
      activeUser,
      answerOne: e.target.option1.value,
      answerTwo: e.target.option2.value,
    }).then((res) => console.log(res));
  };

  return (
    <>
      <NavBar />
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
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="secondOption">
            <Form.Control
              type="text"
              placeholder="Second Option"
              name="option2"
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
}

export default AddQuestion;
