import { useState } from "react";

export default function UseStateComponent({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return(
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}