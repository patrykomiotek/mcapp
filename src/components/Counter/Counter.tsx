import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {

    const intervalId = setInterval(() => {
      setCount((current) => current + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }

  }, []);

  return (
    <p>Count: {count}</p>
  );
}

export { Counter };
