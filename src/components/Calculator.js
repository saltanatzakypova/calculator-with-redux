import { useDispatch, useSelector } from "react-redux";

import { calculatorActionTypes } from "../store/calculator/calculatorReducer";
import classes from "./Counter.module.css";


const Calculator = () => {
  const result = useSelector((state) => state.calculate.result);
  const dispatch = useDispatch()

  const addHandler = () => {
    dispatch({ type: calculatorActionTypes.ADD, paylaod: 5 });
  };
  const subtractHandler = () => {
    dispatch({ type: calculatorActionTypes.SUBTRACT, paylaod: 10 });
  };

  const divideHandler = () => {
    dispatch({ type: calculatorActionTypes.DIVIDE, paylaod: 4 });
  };
  const multiHandler = () => {
    dispatch({ type: calculatorActionTypes.MULTIPLY, paylaod: 2 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={subtractHandler}>-10</button>
      <button onClick={divideHandler}>/4</button>
      <button onClick={multiHandler}>*2</button>
    </main>
  );
};

export default Calculator;
