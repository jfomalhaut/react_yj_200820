import React from "react";
import { useDispatch } from "react-redux";

const Page2 = () => {
  const dispatch = useDispatch();
  const onDecrease = () => {
    dispatch({ type: "DECREASE" });
  };
  return (
    <div>
      <button onClick={onDecrease}>Decrease</button>
    </div>
  );
};

export default Page2;
