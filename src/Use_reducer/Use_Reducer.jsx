import React, { useReducer } from "react";
import Reducer_img from "./Reducer_img";

function Use_Reducer() {
  const object = {
    username: "Jaykumar Patel",
    age: 23,
    number: 1,
    isImage: true,
  };

  const action = (state, action) => {
    if (action.type == "CHANGE") {
      return { ...state, username: "Patel jaykumar", age: 22 };
    }
    if (action.type == "PLUS") {
      return { ...state, number: state.number + 1 };
    }
    if (action.type == "MINUS") {
      return { ...state, number: state.number - 1 };
    }
    if (action.type == "HIDE") {
      return { ...state, isImage: false };
    }
    if (action.type == "SHOW") {
      return { ...state, isImage: true };
    }
    if (action.type == "TOGGLE") {
      return { ...state, isImage: !state.isImage };
    }
  };
  const [state, dispatch] = useReducer(action, object);

  return (
    <div>
      <div className="container mt-5">
        <button onClick={() => dispatch({ type: "CHANGE" })}>Change it</button>
        <h1>
          My user name is {state.username} and my age is {state.age}
        </h1>

        <hr />
        <button onClick={() => dispatch({ type: "PLUS" })}>+</button>
        <h1>{state.number}</h1>
        <button onClick={() => dispatch({ type: "MINUS" })}>-</button>

        <hr />
        <button onClick={() => dispatch({ type: "HIDE" })}>Hide</button>
        <button onClick={() => dispatch({ type: "SHOW" })}>Show</button>
        <button onClick={() => dispatch({ type: "TOGGLE" })}>Hide/Show</button>

        {state.isImage ? <Reducer_img /> : null}
      </div>
    </div>
  );
}

export default Use_Reducer;
