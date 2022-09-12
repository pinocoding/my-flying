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

export function InDecreaBtnAdult({ counterAdult, setCounterAdult }) {
  const incrementCounter = () => setCounterAdult(counterAdult + 1);
  let decrementCounter = () => setCounterAdult(counterAdult - 1);
  if (counterAdult <= 1) {
    decrementCounter = () => setCounterAdult(0);
  }
  return (
    <div>
      <ButtonIncrement onClickFunc={incrementCounter} />
      <Display message={counterAdult} style={{}}/>
      <ButtonDecrement onClickFunc={decrementCounter} />
    </div>
  );
}
export function InDecreaBtnChildren({ counterChildren, setCounterChildren }) {
  const incrementCounter = () => setCounterChildren(counterChildren + 1);
  let decrementCounter = () => setCounterChildren(counterChildren - 1);
  if (counterChildren <= 1) {
    decrementCounter = () => setCounterChildren(0);
  }
  return (
    <div>
      <ButtonIncrement onClickFunc={incrementCounter} />
      <Display message={counterChildren} />
      <ButtonDecrement onClickFunc={decrementCounter} />
    </div>
  );
}
