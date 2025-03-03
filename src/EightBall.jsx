import React, { useState } from "react";
import answers from "./Answers.jsx";
import "./EightBall.css";

function Eightball() {
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");
    const [isClicked, setIsClicked] = useState(false);
  
    function handleClick() {
        if(!isClicked) return;

      const idx = Math.floor(Math.random() * answers.length);
      setMsg(answers[idx].msg);
      setColor(answers[idx].color);
      setIsClicked(false);
    }
  
    const restart = () => {
     setMsg("Think of a Question");
     setColor("black");
     setIsClicked(true);
    }
    return (
    <div className="Eightball">
      <div className={color}onClick={handleClick}>
        <b>{msg}</b>
      </div>
      <button onClick={restart}>Restart</button>
    </div>
    );
  }

export default Eightball;
