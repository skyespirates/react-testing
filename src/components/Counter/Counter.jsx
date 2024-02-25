import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count: {count}</p>
      <div>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    </div>
  );
};

export default Counter;
