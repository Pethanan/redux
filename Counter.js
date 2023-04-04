import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementBy2Handler = () => {
    dispatch(counterActions.increase(2));
  };
  const decrementBy2Handler = () => {
    dispatch(counterActions.decrease(2));
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}> counter increment</button>
        <button onClick={decrementHandler}> counter decrement</button>
        <button onClick={incrementBy2Handler}> increment by 2</button>
        <button onClick={decrementBy2Handler}> decrement by 2</button>
      </div>
    </main>
  );
};

export default Counter;
