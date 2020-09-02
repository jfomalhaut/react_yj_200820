import React, { useState, useRef, useEffect } from "react";

const InputForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [tel, setTel] = useState("");
  const [phoneBook, setPhoneBook] = useState([
    { name: "유진", age: "18", tel: "01022189617" },
  ]);

  useEffect(() => {}, [phoneBook]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const onChangeTel = (e) => {
    setTel(e.target.value);
  };

  const insert = (e) => {
    e.preventDefault();

    const newPhoneBook = [...phoneBook, { name, age, tel }];
    setPhoneBook(newPhoneBook);
    console.log(phoneBook);
  };

  return (
    <div className="container">
      <form className="input">
        <input value={name} onChange={onChangeName} placeholder="이름" />
        <br />
        <input value={age} onChange={onChangeAge} placeholder="나이" />
        <br />
        <input value={tel} onChange={onChangeTel} placeholder="전화번호" />
        <br />
        <button type="submit" onClick={insert}>
          입력
        </button>
      </form>
      <div className="list">
        {phoneBook.map((item, index) => (
          <div className="item" key={`PB${index}`}>
            <div className="name">{item.name}</div>
            <div className="age">{item.age}</div>
            <div className="tel">{item.tel}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputForm;
