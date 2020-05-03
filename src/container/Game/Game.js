import React, { useState, useEffect } from "react";
import Rps from "../../UI/Rps";
import { getRandomOption } from "../../helpers/generatePcOption";
import { Row, Col } from "react-bootstrap";
import stoneSound from "../../assets/audio/stone-sound.mp3";
import Scissor from "../../assets/audio/Scissors.mp3";
import Paper from "../../assets/audio/Paper.mp3";
import Menu from "../../assets/audio/Menu.mp3";
import "./Game.css";

const Game = ({ callback }) => {
  const [userPoint, setUserPoint] = useState(0);
  const [pcPoint, setPCPoint] = useState(0);
  const [pcoption, setPcOption] = useState();
  const [selected, setSelected] = useState();
  const [pcClass, setPcClass] = useState();
  const [userClass, setUserClass] = useState();

  const classes = pcoption ? "material effect" : "material";
  const audioplay = option => {
    if (option && option === "stone") {
      new Audio(stoneSound).play();
    }
    if (option && option === "scissor") {
      new Audio(Scissor).play();
    }
    if (option && option === "paper") {
      new Audio(Paper).play();
    }
  };

  useEffect(() => {
    callback(pcPoint, userPoint);
  }, [pcPoint, userPoint, callback]);

  const onClickHandler = async name => {
    new Audio(Menu).play();
    setPcClass("");
    setUserClass("");
    setSelected("");
    setPcOption("");
    let pcoption = await new Promise(resolve =>
      setTimeout(() => {
        return resolve(getRandomOption());
      }, 1000)
    );

    setPcOption(pcoption);

    let selected = name;
    setSelected(name);
    if (
      (selected === "stone" && pcoption.name === "paper") ||
      (selected === "paper" && pcoption.name === "scissor") ||
      (selected === "scissor" && pcoption.name === "stone")
    ) {
      setPCPoint(pcPoint + 1);
      setPcClass("pc-effect");
      audioplay(pcoption.name);
    }
    if (
      (selected === "stone" && pcoption.name === "scissor") ||
      (selected === "scissor" && pcoption.name === "paper") ||
      (selected === "paper" && pcoption.name === "stone")
    ) {
      setUserPoint(userPoint + 1);
      setUserClass("user-effect");
      audioplay(selected);
    }
  };
  return (
    <>
      <Row>
        <Col md={6}>
          <p className="fs24">You</p>
          <Rps
            className={classes}
            selected={selected}
            clicked={name => onClickHandler(name)}
          />
        </Col>
        <Col md={6}>
          <p className="fs24">PC</p>
          {pcoption && (
            <img
              className={classes}
              src={pcoption.img}
              alt={pcoption.name}
              height="100"
              width="100"
            />
          )}
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="fs24">
            You scored <div className={userClass}>{userPoint}</div>
          </div>
        </Col>
        <Col md={6}>
          <div className="fs24">
            PC Scored <div className={pcClass}>{pcPoint}</div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Game;
