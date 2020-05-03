import React from "react";
import Cut from "../assets/images/sewing-scissors.png";
import Stone from "../assets/images/rock.png";
import Paper from "../assets/images/paper.png";
import Table from "../assets/images/table.png";
import Toolbox from "../assets/images/Toolbox.jpg";
import { imageSelection } from "../helpers/imageSelection";
import "./Rps.css";

const Rps = props => {
  let arr = [
    { img: Stone, name: "stone" },
    { img: Paper, name: "paper" },
    { img: Cut, name: "scissor" }
  ];
  const userSelectedClassName = props.selected ? "image eff" : "image";

  return (
    <>
      <div className="mb100">
        {props.selected ? (
          <img
            className={userSelectedClassName}
            src={imageSelection(props.selected).img}
            alt={imageSelection(props.selected).name}
            height="100"
            width="100"
            style={{ cursor: "pointer", margin: "20px" }}
          />
        ) : (
          <div className="recbox" />
        )}
      </div>

      <div className="relimage">
        <img
          className="absimage"
          src={Toolbox}
          alt="toolbox"
          height="100"
          width="100"
          style={{ cursor: "pointer", margin: "20px 20px 0 20px" }}
        />
        {arr.map((el, idx) => {
          return (
            <img
              className="absimage"
              key={idx}
              src={el.img}
              alt={el.name}
              onClick={() => props.clicked(el.name)}
              height="100"
              width="100"
              style={{ cursor: "pointer", margin: "20px 20px 0 20px" }}
            />
          );
        })}
      </div>

      <div>
        <img
          src={Table}
          alt="table"
          height="200"
          width="500"
          style={{ cursor: "pointer" }}
        />
      </div>
    </>
  );
};

export default Rps;
