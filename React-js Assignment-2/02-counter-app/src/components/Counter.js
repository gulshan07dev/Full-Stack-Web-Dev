import React, { useState } from 'react';
import '../components/Counter.css';

export default function Counter() {
  // State to store the counter value
  const [counter, setCounter] = useState(0);

  // Event handler to increment the counter
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  // Event handler to decrement the counter
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className='container'>
      <div className='result'>
        {counter}
      </div>
      <div className='btn-container'>
        {/* Use the event handlers fot imcrement and decrement counter*/}
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}