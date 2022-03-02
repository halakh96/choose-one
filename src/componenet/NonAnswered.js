import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const NonAnswered = () => {
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);

  return (
    <>
      {Object.values(questions).map((question, index) => {
        if (
          question.firstOption.votes.length == 0 &&
          question.secondOption.votes.length == 0
        )
          return (
            <Card
              className="m-5 p-5"
              border="dark"
              key={index}
              style={{ width: "25rem" }}
            >
              <Button variant="outline-dark">{question.firstOption.string}</Button>
              <Button variant="outline-dark">{question.secondOption.string}</Button>
            </Card>
          );
      })}
    </>
  );
};

export default NonAnswered;
