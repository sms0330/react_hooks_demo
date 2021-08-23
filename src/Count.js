import { useState } from "react";

const Count = () => {
  const [value, setValue] = useState(0);

  const firstMethod = (incrementValue) => {
    setValue(value + incrementValue);
  };

  const secondMethod = (incrementValue) => {
    setValue((state) => state + incrementValue);
  };

  console.log("This components is being rendered");
  return (
    <div>
      <p>Current count is {value}</p>
      <button onClick={() => firstMethod(5)}>First method</button>
      <button onClick={() => secondMethod(5)}>Second method</button>
      {/* <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment{" "}
      </button>

      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrement{" "}
      </button> */}
    </div>
  );
};

export default Count;
