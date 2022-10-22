import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // mounting or updating

    const intervalId = setInterval(() => {
      setCount((current) => current + 1);
    }, 1000);

    return () => {
      // unmount
      clearInterval(intervalId);
    }

  }, []);

  return (
    <p>Count: {count}</p>
  );
}

export { Counter };
