import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.payload,
        numberOfUpdates: state.numberOfUpdates++,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - action.payload,
        numberOfUpdates: state.numberOfUpdates++,
      };

    default:
      return state;
  }
};

const CountV3 = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    numberOfUpdates: 0,
  });
  return (
    <>
      <p>This is count v3 example</p>
      <p>Current count is {state.count}</p>
      <p>Number of updates is {state.numberOfUpdates}</p>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
        Increment by 1
      </button>

      <button onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}>
        Increment by 2
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
        Decrement by 1
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT", payload: 2 })}>
        Decrement by 2
      </button>
    </>
  );
};

export default CountV3;
