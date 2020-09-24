import React from "react";
import { useDispatch } from "react-redux";

const Page1 = () => {
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch({ type: "INCREASE" });
  };

  return (
    <div>
      <button onClick={onIncrease}>increase</button>
    </div>
  );
};

export default Page1;
