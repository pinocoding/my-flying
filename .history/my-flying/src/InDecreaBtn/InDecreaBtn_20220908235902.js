import React from "react";

export default class  function InDecreaBtn() {
  return (
    <div>
      <ButtonIncrement onClickFunc={incrementCounter} />
      <Display message={counter} />
      <ButtonDecrement onClickFunc={decrementCounter} />
    </div>
  );
}

export default InDecreaBtn;
