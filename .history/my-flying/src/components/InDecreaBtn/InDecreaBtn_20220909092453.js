function ButtonIncrement(props) {
  return (
    <button
      style={{ width: "20px", marginLeft: "10px" }}
      onClick={props.onClickFunc}
    >
      +
    </button>
  );
}
function ButtonDecrement(props) {
  return (
    <button style={{ width: "20px" }} onClick={props.onClickFunc}>
      -
    </button>
  );
}
function Display(props) {
  return (
    <div style={{display:"flex"}}> 
      <label
        style={{
          color: "rgba(77, 70, 250, 1)",
          margin: "0 5px 0 5px",
        }}
      >
        {props.message}
      </label>
    </div>
  );
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
      <Display message={counterAdult} />
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
