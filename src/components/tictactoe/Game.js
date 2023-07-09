import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "./helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    console.log(boardCopy[index]);
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winnder is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
