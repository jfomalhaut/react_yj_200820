import React, { useState } from "react";

const useInput = (intialValue) => {
  const [data, setData] = useState(intialValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    if (value) {
      setData(value);
    } else {
      setData("");
    }
  };
  return [data, onChange, setData];
};

export default useInput;
