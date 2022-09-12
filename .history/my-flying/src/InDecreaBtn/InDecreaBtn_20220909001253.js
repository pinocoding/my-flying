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
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
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
