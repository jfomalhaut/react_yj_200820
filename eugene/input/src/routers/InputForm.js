import React, { useState, useCallback } from "react";

const InputForm = ({ onInsert }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [tel, setTel] = useState("");

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onChangeAge = useCallback((e) => {
    setAge(e.target.value);
  }, []);

  const onChangeTel = useCallback((e) => {
    setTel(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(name, age, tel);
      setTel("");
      setName("");
      setAge("");
      e.preventDefault();
      console.log("success");
    },
    [onInsert, name, age, tel]
  );

  return (
    <div className="container">
      <form className="input" onSubmit={onSubmit}>
        <input value={name} onChange={onChangeName} placeholder="이름" />
        <br />
        <input value={age} onChange={onChangeAge} placeholder="나이" />
        <br />
        <input value={tel} onChange={onChangeTel} placeholder="전화번호" />
        <br />
        <button type="submit">입력</button>
      </form>
    </div>
  );
};

export default InputForm;
