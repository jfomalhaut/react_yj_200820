import React, { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };
  return [value, onChange];
};
