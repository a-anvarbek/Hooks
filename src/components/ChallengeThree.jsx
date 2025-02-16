import { useState } from "react";

function ChallengeThree() {
  const [count, counter] = useState(0);

  console.log("count changed");

  if (count % 5 === 0) {
    console.log(`Number ${count}`);
}
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Number: {count % 5 === 0? count : null}</h2>

      <button onClick={() => counter(count + 1)}>➕ Increase</button>
    </div>
  );
}

export default ChallengeThree;
