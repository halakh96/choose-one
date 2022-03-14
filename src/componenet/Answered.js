import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Answered = () => {
  const questions = useSelector((state) => state.questions);
  // get the activeUser from users state
  const activeUser = useSelector(
    (state) => state.users[state.activeUser[0].id]
  );
  const answers = Object.keys(activeUser.answers);

  return (
    <Container>
      <Row className="justify-content-center">
        {Object.values(questions)
          .filter((question) => answers.includes(question.id))
          .map((question, index) => {
            return (
              <Card
                className=" m-2 p-5"
                border="dark"
                key={index}
                style={{ width: "25rem" }}
              >
                <Card.Title>Would you Rather?</Card.Title>
                {question.firstOption.votes.includes(activeUser.id) ? (
                  <Button
                    variant="dark"
                    value="firstOption"
                    style={{ pointerEvents: "none", margin: "5px" }}
                  >
                    {question.firstOption.string}
                  </Button>
                ) : (
                  <Button
                    variant="outline-dark"
                    value="firstOption"
                    style={{ pointerEvents: "none", margin: "5px" }}
                  >
                    {question.firstOption.string}
                  </Button>
                )}
                {question.secondOption.votes.includes(activeUser.id) ? (
                  <Button
                    variant="dark"
                    value="secondOption"
                    style={{ pointerEvents: "none", margin: "5px" }}
                  >
                    {question.secondOption.string}
                  </Button>
                ) : (
                  <Button
                    variant="outline-dark"
                    value="secondOption"
                    style={{ pointerEvents: "none", margin: "5px" }}
                  >
                    {question.secondOption.string}
                  </Button>
                )}
              </Card>
            );
          })}
      </Row>
    </Container>
  );
};

export default Answered;
