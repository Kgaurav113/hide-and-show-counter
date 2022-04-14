import React, { useState, useRef } from "react";

export default function Counter() {
  const [Count, Setcount] = useState(0);

  let x = 0;
  console.log(x);
  return (
    <div>
      <h1>Counter:{Count}</h1>
      <div>
        <button
          onClick={() => {
            Setcount(Count + 1);
            x = x + 1;
            console.log("new x", x);
          }}
        >
          Increment
        </button>
        <button onClick={() => Setcount(Count - 1)}>Decrement</button>
      </div>
    </div>
  );
}
