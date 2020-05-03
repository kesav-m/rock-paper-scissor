import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Game from "../Game/Game";
import Button from "../../components/Button";
import { Container, Row, Col } from "react-bootstrap";

const Main = props => {
  const [gameStart, setGameStart] = useState(false);
  const [winner, setWinner] = useState();
  const callBackHandler = (pcPoint, userPoint) => {
    if (pcPoint > 2 || userPoint > 2) {
      if (pcPoint > userPoint) {
        setTimeout(() => {
          setWinner(`PC Won ${pcPoint}`);
          setGameStart(false);
        }, 2000);
      }
      if (userPoint > pcPoint) {
        setTimeout(() => {
          setWinner(`You Won ${userPoint}`);
          setGameStart(false);
        }, 2000);
      }
    }
  };
  const startButtonClicked = () => {
    setGameStart(!gameStart);
    setWinner("");
  };
  return (
    <Container fluid>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Rock Paper Scissor</h1>
            <p>
              Rock paper scissors is a hand game usually played between two
              people, in which each player simultaneously forms one of three
              shapes with an outstretched hand. These shapes are "rock",
              "paper", and "scissors"
            </p>
          </Jumbotron>
        </Col>
      </Row>
      {gameStart && !winner && (
        <Game callback={(al, el) => callBackHandler(al, el)} />
      )}

      <Row>
        <Button clicked={() => startButtonClicked()}>
          {gameStart ? "Exit" : "Start"}
        </Button>
      </Row>
      <>
        {winner && (
          <>
            <div className="fs24">{winner}</div>
            <img
              style={{ transition: "1s" }}
              src="https://media.giphy.com/media/m6OomwWCojfS8/source.gif"
              alt="This is an animate but it does not move"
            />
          </>
        )}
      </>
    </Container>
  );
};

export default Main;
