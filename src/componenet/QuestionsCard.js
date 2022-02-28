import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const QuestionsCard = () => {
  const questions = useSelector((state) => state.questions);
  return (
    <>
      {Object.values(questions).map((question, index) => {
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