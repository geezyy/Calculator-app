// import React
import React, { useState } from "react";
import "./App.css";

// Create Calc Function
const App = () => {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");
  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(expression);
        setDisplay(result.toString());
        setExpression(result.toString());
      } catch (error) {
        setDisplay("Error");
        setExpression("");
      }
    } else if (value === "C") {
      setDisplay("0");
      setExpression("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
      setDisplay((prevDisplay) =>
        prevDisplay === "0" ? value : prevDisplay + value
      );
    }
  };
//   Render the buttons 
  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div>
        <button className="clr-btn" onClick={() => handleClick("C")}>C</button>
      </div>
    </div>
  );
};

export default App