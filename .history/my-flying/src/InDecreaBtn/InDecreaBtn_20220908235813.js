import React from "react";

function InDecreaBtn() {
  return <div>InDecreaBtn</div <div> 
  <ButtonIncrement onClickFunc={incrementCounter}/>
  <Display message={counter}/> 
  <ButtonDecrement onClickFunc={decrementCounter}/>
</div>>;
}

export default InDecreaBtn;
