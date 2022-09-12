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

export function InDecreaBtn({ counterAdult, setCounterAdult }) {
  const incrementCounter = () => setCounterAdult(counterAdult + 1);
  let decrementCounter = () => setCounterAdult(counterAdult - 1);
  if (counterAdult <= 1) {
    decrementCounter = () => setCounterAdult(0);
  }
  return (
    <div>
      <ButtonIncrement onClickFunc={incrementCounter} />
      <Display message={counterAdult} />
      <ButtonDecrement onClickFunc={decrementCounter} />
    </div>
  );
}
export default function InDecreaBtnChildren({
  counterChildren,
  setCounter,
}) {
  const incrementCounter = () => setCounterAdult(counterAdult + 1);
  let decrementCounter = () => setCounterAdult(counterAdult - 1);
  if (counterAdult <= 1) {
    decrementCounter = () => setCounterAdult(0);
  }
  return (
    <div>
      <ButtonIncrement onClickFunc={incrementCounter} />
      <Display message={counterAdult} />
      <ButtonDecrement onClickFunc={decrementCounter} />
    </div>
  );
}
