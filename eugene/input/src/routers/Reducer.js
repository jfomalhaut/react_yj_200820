import React, { useReducer } from "react";
import useInput from "../customs/useInput";

const reducer = (state, { type, data }) => {
  switch (type) {
    case "INCREASE": {
      return state + 1;
    }
    case "DECREASE": {
      return state - 1;
    }
    case "PLUS_DATA": {
      return state + Number(data);
    }
    default: {
      return state;
    }
  }
};

const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const [data, setData, setData2] = useInput("");

  const onIncrease = () => {
    dispatch({ type: "INCREASE" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREASE" });
  };

  const onDateChange = () => {
    dispatch({ type: "PLUS_DATA", data: data });
    setData2("");
  };

  return (
    <div>
      <h1>count: {count}</h1>
      <div>
        <input value={data} onChange={setData}></input>
        <button onClick={onDateChange}>플러스</button>
      </div>
      <button onCLick={onIncrease}>increase</button>
      <button onCLick={onDecrease}>decrease</button>
    </div>
  );
};

export default Reducer;
