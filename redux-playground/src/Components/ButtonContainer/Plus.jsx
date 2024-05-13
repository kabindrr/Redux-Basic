import React from "react";
import { increase } from "../../counterSlice";
import { useDispatch } from "react-redux";

export const Plus = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(increase())}>
      <h1>+</h1>
    </button>
  );
};
