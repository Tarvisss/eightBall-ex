import React, { useState } from "react";
import "./numberGame.css"

const NumberGame = (props) => {

    const makeGuess = () => {
        setGuess(getRandom());
        setGuessCount(guessCount + 1);
    }
    const restart = () => {
        setTarget(getRandom());
        setGuess(0);
        setGuessCount(0);
    }
    const getRandom = () => Math.floor(Math.random() * 10) + 1;
    const [guessCount, setGuessCount] = useState(0);
    const [guess, setGuess] = useState(getRandom());
   
    const [target, setTarget] = useState(getRandom());
    const isWinner = guess === target;
    return (
        <div>
            <h1>Target Num: {target}</h1>
            <h1>Number Game</h1>
            <h2 className={isWinner ? "winner" : "loser"}>your Guess {guess}</h2>
            <h3>Guess Counter:{guessCount}</h3>
            
            {!isWinner && <button onClick={makeGuess}>Submit</button>}
            {isWinner ? null : <button onClick={() => setGuess(getRandom())}>Submit</button>}
            <button onClick={restart}>New Game</button>   
        </div>
    )
    
}
export default NumberGame