import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="flex flex-col items-center">
      <p className="text-xl mb-4">
        Counter value: <span className="font-bold">{count}</span>
      </p>
      <div className="flex gap-4">
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Decrease
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Increase
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        This React component is hydrated on the client-side.
        <br />
        Client render time: {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}