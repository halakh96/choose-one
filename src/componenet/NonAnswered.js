import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const NonAnswered = () => {
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  console.log(questions, "questions");
  return (
    <>
      {Object.values(questions).map((question, index) => {
        console.log(question, "question");
        if (
          question.firstOption.votes.length == 0 &&
          question.secondOption.votes.length == 0
        )
          return (
            <Card key={index} style={{ width: "25rem" }}>
              <Card.Img variant="top" src={question.creator} />
              <ListGroup variant="flush">
                <ListGroup.Item>{question.firstOption.string}</ListGroup.Item>
                <ListGroup.Item>{question.secondOption.string}</ListGroup.Item>
              </ListGroup>
            </Card>
          );
      })}
    </>
  );
};

export default NonAnswered;
