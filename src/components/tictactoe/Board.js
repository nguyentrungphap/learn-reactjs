import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  // console.log(props);
  // const show = () => {
  //   const cells = [null, null, null, "X", "X", "X", null, null, null];
  //   console.log(calculateWinner(cells));
  // };

  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index} // thứ tự của từng cell
          value={item} // giá trị của cell trong trường hợp này là null
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""} //truyen class vao phan props.classname ben Cell.js neu gia tri cua item thay doi
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
