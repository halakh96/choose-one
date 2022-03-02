import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Answered = () => {
  const questions = useSelector((state) => state.questions);
  const activeUser = Object.values(useSelector((state) => state.activeUser));
  const answers = Object.keys(activeUser[0].answers);
  const users = Object.values(useSelector((state) => state.users));
  
  return (
    <div>
      {Object.values(questions).filter((question)=>answers.includes(question.id)).map((question,index)=>{
       const imgUrl = users.filter((user)=>user.id == question.creator)[0].imgUrl;
    
         return (
          <Card
            className="m-5 p-5"
            border="dark"
            key={index}
            style={{ width: "25rem" }}
          >
            <Card.Img variant="top" src={imgUrl} />
            <Button variant="outline-dark">{question.firstOption.string}</Button>
            <Button variant="outline-dark">{question.secondOption.string}</Button>
          </Card>
        );
      })
      }
    </div>
  );
};

export default Answered;
