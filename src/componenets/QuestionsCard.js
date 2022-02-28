import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const QuestionsCard = () => {
  const questions = useSelector((state) => state.questions);
  console.log(questions, "questions in home page");
  return (
    <>
      {Object.values(questions).map((question, index) => {
        console.log(question, "each question");
        return (
          <Card>
            <Card.Body>{question.creator}</Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default QuestionsCard;
