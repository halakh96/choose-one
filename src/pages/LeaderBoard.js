import { useSelector } from "react-redux";
import NavBar from "../componenet/NavBar";
import { Card, CardGroup, Container } from "react-bootstrap";

function LeaderBoard() {
  const users = Object.values(useSelector((state) => state.users));

  return (
    <div>
      <NavBar />
      <Container>
        <CardGroup className="mt-5">
          {users.map((user,index) => {
            return (
              <Card key={index}>
                <Card.Img
                  variant="top"
                  src={user.imgUrl}
                  style={{ width: "60%" , height:"50%"}}
                />
                <Card.Body>
                  <Card.Title>{user.fullname}</Card.Title>
                  <Card.Text>
                    Answered Questions:{Object.keys(user.answers).length}
                  </Card.Text>
                  <Card.Text>
                    {" "}
                    created Questions:{user.questions.length}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Total :{" "}
                    {Object.keys(user.answers).length + user.questions.length}
                  </small>
                </Card.Footer>
              </Card>
            );
          })}
        </CardGroup>
      </Container>
    </div>
  );
}

export default LeaderBoard;
