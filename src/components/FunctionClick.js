import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button clicked")
    }
  return (
    <div> 
        {/* if we put parathesis then it will be like a function call and event handler is a function and not a function call */}
      <button onClick={clickHandler}>Click</button>
    </div>
  ) 
}

export default FunctionClick
