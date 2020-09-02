import React from "react";
import InputForm from "./InputForm";

const InputLists = () => {
  const [phoneBook, setPhoneBook] = useState([]);

  const addPhoneBook = (name, age, tel) => {
    const newPhoneBook = [...phoneBook, name, age, tel];
    setPhoneBook(newPhoneBook);
    console.log(...phoneBook);
  };

  return (
    <div className="list">
      <InputForm onSubmit={addPhoneBook} />
      {phoneBook.map((item, index) => (
        <div className="item" key={`PB${index}`}>
          <div className="name">{item.name}</div>
          <div className="age">{item.age}</div>
          <div className="tel">{item.tel}</div>
        </div>
      ))}
    </div>
  );
};

export default InputLists;
