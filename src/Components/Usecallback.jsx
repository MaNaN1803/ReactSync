import React, { useState, useCallback } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // Ek function ko useCallback ke sath memoize karna
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array mein count include kiya gaya hai

  return (
    <div>
      <p>Count: {count}</p>
      {/* Button par click hone par handleClick function call */}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default ExampleComponent;
