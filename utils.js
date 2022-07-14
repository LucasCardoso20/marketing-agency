import React, { useEffect, useState } from "react";

export default function utils(number, int) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCounter((count) => count <= number - 1 ? count + 1 : number = number)
    }, int);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="App">{counter}</div>;
}
