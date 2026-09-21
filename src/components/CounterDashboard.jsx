import { useState } from "react";

function CounterDashboard() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((previousCount) => previousCount + 1);
  }

  function decrease() {
    setCount((previousCount) => previousCount - 1);
  }

  function reset() {
    setCount(0);
  }

  function doubleValue() {
    setCount((previousCount) => previousCount * 2);
  }

  return (
    <section className="counter-dashboard">
      <h1>Counter Dashboard</h1>
      <p className="count-value">{count}</p>

      <p>
        {count > 0
          ? "Positive value"
          : count < 0
            ? "Negative value"
            : "Zero value"}
      </p>

      <div className="button-group">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={doubleValue}>Double Value</button>
      </div>
    </section>
  );
}

export default CounterDashboard;
