import React from "react";
import { increment, cartCount, decrement } from "./cartCounterSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";

const Counter = () => {
  const count = ""
  useSelector(cartCount);
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(increment())}></Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(decrement())}></Button>
    </>
  );
};

export default Counter;
