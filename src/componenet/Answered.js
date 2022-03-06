import React from "react";
import { Button, Card, Col , Row,Container} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Answered = () => {
  const questions = useSelector((state) => state.questions);
  const activeUser = Object.values(useSelector((state) => state.activeUser));
  const answers = Object.keys(activeUser[0].answers);
  const users = Object.values(useSelector((state) => state.users));

  // useEffect(() => {
  //  console.log("heloo");
  // }, [questions])

  return (
    <Container>
      {Object.values(questions)
        .filter((question) => answers.includes(question.id))
        .map((question, index) => {
          // const imgUrl = users.filter((user) => user.id == question.creator)[0]
          //   .imgUrl;
              
          return (
            <Card  className="m-5 p-5"
            border="dark"
            key={index}
            style={{ width: "25rem" }}>
                <Card.Title>Would you Rather?</Card.Title>
              {question.firstOption.votes.includes(activeUser[0].id) ? (
                <Button variant="dark" value="firstOption"  style={{ pointerEvents: "none" , margin:"5px"}}>
                  {question.firstOption.string}
                </Button>
              ) : (
                <Button variant="outline-dark" value="firstOption"  style={{ pointerEvents: "none", margin:"5px" }}>
                  {question.firstOption.string}
                </Button>
              )}
              {question.secondOption.votes.includes(activeUser[0].id) ? (
                <Button variant="dark" value="secondOption"  style={{ pointerEvents: "none" ,  margin:"5px"}}>
                  {question.secondOption.string}
                </Button>
              ) : (
                <Button variant="outline-dark" value="secondOption"  style={{ pointerEvents: "none" ,  margin:"5px"}}>
                  {question.secondOption.string}
                </Button>
              )}
             
            </Card>
          );
        })}
    </Container>
  );
};

export default Answered;
