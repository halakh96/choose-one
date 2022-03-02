import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Answered = () => {
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const activeUser = useSelector((state) => state.activeUser);
  return (
    <>
      {Object.values(activeUser).map((item) => {
        Object.values(questions).map((question, index) => {
          // console.log(Object.keys(item.answers),"ansrwedQ");
          //      console.log(question.id,"allQ");
         
          if (Object.keys(item.answers).includes(question.id))
            // console.log(question.firstOption.string,question.secondOption.string);
           
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
        });
      })}
    </>
  );
};

export default Answered;
