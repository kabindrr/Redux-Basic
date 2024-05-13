import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const { count } = useSelector((state) => state.counterState);

  return <div>{count}</div>;
};
