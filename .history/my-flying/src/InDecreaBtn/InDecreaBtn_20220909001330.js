import { useState } from "react";
function ButtonIncrement(props) {
  return (
    <button style={{ marginLeft: ".5rem" }} onClick={props.onClickFunc}>
      +
    </button>
  );
}
function ButtonDecrement(props) {
  return (
    <button style={{ marginLeft: ".5rem" }} onClick={props.onClickFunc}>
      -
    </button>
  );
}
function Display(props) {
  return <label style={{ marginLeft: ".5rem" }}>{props.message}</label>;
}
function InDecreaBtn({ counterAdult, setCounterAdult }) {
  const incrementCounter = () => setCounterAdult(counterAdult + 1);
  let decrementCounter = () => setCounterAdult(counterAdult - 1);
  if (counterAdult <= 1) {
    decrementCounter = () => setCounterAdult(1);
  }
  return (
    <div>
      <ButtonIncrement onClickFunc={incrementCounter} />
      <Display message={counter} />
      <ButtonDecrement onClickFunc={decrementCounter} />
    </div>
  );
}
export default InDecreaBtn;
