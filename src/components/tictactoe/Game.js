import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "./helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // 1 mảng có 9 phần tử và có giá trị null
  const handleClick = (index) => {
    // index là thứ tự  của từ cell
    const boardCopy = [...board]; //tạo 1 bảng board không làm ảnh hưởng tới bảng board gốc nếu thay đổi 1 cái j đó
    if (winner || boardCopy[index]) return; // chặn ko bấm được nếu win hoặc chổ đó đã được chọn
    boardCopy[index] = xIsNext ? "X" : "O"; // nếu true thì X không thì O
    setBoard(boardCopy); // thay đổi giá trị của bảng bằng giá trị của bảng copy
    setXIsNext(!xIsNext); // thay đổi giá trị cú xisNext thành false
  };
  // --------------------------------------------------
  // làm nút reset
  const [xIsNext, setXIsNext] = useState(true); //tạo 1 useState gắng giá trị true
  const winner = calculateWinner(board);
  console.log(winner);
  const handleResetGame = () => {
    setBoard(Array(9).fill(null)); //set lại giá trị của mảng thánh null
    setXIsNext(true); // set giá trị của xIsNext thành true
    // --------------------------------------------------
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        {/* //lam nut reset game */}
        Reset game
      </button>
    </div>
  );
};

export default Game;
