
import { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevValue) => prevValue + 1);
    }, 10000000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>{timer}</h1>
    </div>
  );
}

export default Timer;
