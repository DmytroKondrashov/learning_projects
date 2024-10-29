import React, { useRef } from 'react';

function DomManipulation() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = 'lightyellow';
    }
  }

  return(
    <div>
      <h1>Focus example</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={focusInput}>Focus!</button>
    </div>
  )
}

export default DomManipulation;
