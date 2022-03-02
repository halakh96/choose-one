import NavBar from "../componenet/NavBar";
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNewQuestion } from "../actions"; 


function AddQuestion() {
    const dispatch = useDispatch();

  const handleChange = (e) => {
    // dispatch(addNewQuestion()); 
  }
  return (
    <>
      <NavBar />
      <Card className="m-5 p-4 text-center" border="dark" style={{ width: "25rem" }}>
        <Form>
          <Form.Group className="mb-3" controlId="firstOption">
            <Form.Control type="text" placeholder="First Option" onChange={(e)=>{handleChange(e)}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="secondOption">
            <Form.Control type="text" placeholder="Second Option" onChange={(e)=>{handleChange(e)}} />
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
