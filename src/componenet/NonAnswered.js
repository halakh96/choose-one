import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useSelector , useDispatch} from "react-redux";
import { addNewAnswer , addAnswer } from "../actions";
import { addAnswerToQuestion } from "../DATA";


const NonAnswered = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const activeUser = Object.values(useSelector((state) => state.activeUser));
  const answers = Object.keys(activeUser[0].answers);
  const users = Object.values(useSelector((state) => state.users));

  const handleChange = (e, questionId) => {
    const answer = {
      answer: e.target.value,
      authedUser: activeUser[0].id,
      questionId: questionId,
    };
    console.log(answer);
    dispatch(addNewAnswer(answer));

   
  };
  return (
    <Container>
      {Object.values(questions)
        .filter((question) => !answers.includes(question.id))
        .map((question, index) => {
          // const imgUrl = users.filter((user) => user.id == question.creator)[0]
          //   .imgUrl;
            const questionId = question.id;
          return (
            <Card
              className="m-5 p-5"
              border="dark"
              key={index}
              style={{ width: "25rem" }}
            >
              <Card.Title>Would you Rather?</Card.Title>
              <Button
                onClick={(e) => {
                  handleChange(e, questionId);
                }}
                variant="outline-dark"
                value="firstOption"
                style={{ margin:"5px"}}
              >
                {question.firstOption.string}
              </Button>
              <Button  onClick={(e) => {
                  handleChange(e, questionId);
                }}
                variant="outline-dark"
                value="secondOption"
                 variant="outline-dark"
                 style={{ margin:"5px"}}>
                {question.secondOption.string}
              </Button>
            </Card>
          );
        })}
    </Container>
  );
};

export default NonAnswered;
