import React, { useState, useCallback } from "react";

//If we use React.memo it will check props and if they are the same it will not re-render current component
const ShowCount = React.memo(({ currentCount }) => {
  console.log("The count component is being rendered");
  return (
    <>
      <p>Current count is: {currentCount}</p>
    </>
  );
});

const IncrementButton = React.memo(({ onClick }) => {
  console.log("The increment button component is being rendered");
  return <button onClick={() => onClick()}> Increment </button>;
});

const CountV2 = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  const increment = useCallback(() => {
    setCount(count + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setCount]);

  return (
    <>
      <p>This is count v2 example</p>
      {/* <button onClick={() => setCount((c) => c + 1)}>Increment </button> */}
      <IncrementButton onClick={increment} />
      {/* <IncrementButton onClick={() => setCount((c) => c + 1)} /> */}
      <button onClick={() => setUser({ name: "user1" })}>Change user</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <ShowCount currentCount={count} />
    </>
  );
};

export default CountV2;
