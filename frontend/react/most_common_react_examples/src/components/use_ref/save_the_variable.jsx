import React, { useRef, useState } from 'react';

function SaveTheVariable() {
  const countRef = useRef(0);
  const [render, setRender] = useState(false);

  const incrementCount = () =>{
    countRef.current +=1;
  }

  const forceRender = () => {
    setRender(prev => !prev);
  }

  return(
    <div>
      <h1>Counter Example</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={forceRender}>Force Render</button>
      <h2>Current Count: {countRef.current}</h2>
    </div>
  )
}

export default SaveTheVariable;