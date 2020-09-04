import { useState } from "react";

const useInput = (initiailValue) => {
  const [value, setValue] = useState(initiailValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return [value, onChange];
};

export default useInput;
