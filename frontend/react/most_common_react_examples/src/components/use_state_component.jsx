import { useState } from "react";

export default function UseStateComponent({ initialCount }) {
  const [number, setNumber] = useState(initialCount);

  return(
    <div>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <button onClick={() => setNumber(number - 1)}>Decrement</button>
      <button onClick={() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </div>
  )
}
