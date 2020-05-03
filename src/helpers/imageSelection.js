import Cut from "../assets/images/sewing-scissors.png";
import Stone from "../assets/images/rock.png";
import Paper from "../assets/images/paper.png";

export const imageSelection = name => {
  let cpoption = [
    { img: Stone, name: "stone" },
    { img: Paper, name: "paper" },
    { img: Cut, name: "scissor" }
  ];

  return cpoption.find(al => al.name === name);
};
