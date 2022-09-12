import React from "react";

exportfunction InDecreaBtn() {
  return (
    <div>
      <ButtonIncrement onClickFunc={incrementCounter} />
      <Display message={counter} />
      <ButtonDecrement onClickFunc={decrementCounter} />
    </div>
  );
}

export default InDecreaBtn;
