import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
}

const getdemo = JSON.parse(localStorage.getItem("product"));

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    cart: getdemo,
  });
  console.log(state.cart);

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
