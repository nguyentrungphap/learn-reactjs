import React from "react";
// object destructuring
const student = {
  name: "phap",
  age: 28,
};

const Cell = (props) => {
  return (
    <div className={`game-cell ${props.className}`} onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
