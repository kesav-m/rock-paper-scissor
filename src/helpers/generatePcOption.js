import React from "react";
import Cut from "../assets/images/sewing-scissors.png";
import Stone from "../assets/images/rock.png";
import Paper from "../assets/images/paper.png";
import Scissor from "../assets/audio/Scissors.mp3";

export const getRandomOption = () => {
  let cpoption = [
    { img: Stone, name: "stone" },
    { img: Paper, name: "paper" },
    { img: Cut, name: "scissor", audio: Scissor }
  ];
  let num = Math.floor(Math.random() * Math.floor(3));
  return cpoption[num];
};
