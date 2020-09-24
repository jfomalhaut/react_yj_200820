import React, { useState } from "react";
import useInput from "../customs/useInput";

const Input2 = () => {
  const [name, onChangeName] = useInput("");
  const [age, onChangeAge] = useInput("");
  const [tel, onChangeTel] = useInput("");
  const onInsert = () => {
    console.log(name, age, tel);
  };
  return (
    <div>
      <input value={name} onChange={onChangeName} />
      <input value={age} onChange={onChangeAge} />
      <input value={tel} onChange={onChangeTel} />

      <div>
        <button onClick={onInsert}>등록</button>
      </div>
    </div>
  );
};

export default Input2;
