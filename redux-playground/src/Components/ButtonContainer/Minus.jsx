import React from "react";
import { useDispatch } from "react-redux";
import { decrease } from "../../counterSlice";

export const Minus = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(decrease())}>
      <h1>-</h1>
    </button>
  );
};
