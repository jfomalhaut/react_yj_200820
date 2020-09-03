import React, { useState, useCallback, useRef } from "react";
import InputForm from "./routers/InputForm";
import InputList from "./routers/InputList";

const App = () => {
  const [phoneBooks, setPhoneBooks] = useState([
    { id: 1, name: "유진", age: "18", tel: "01022189617" },
    { id: 2, name: "보라", age: "22", tel: "01022133317" },
    { id: 3, name: "단비", age: "18", tel: "01072720723" },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (name, age, tel) => {
      const newPhoneBook = {
        id: nextId,
        name,
        age,
        tel,
      };
      setPhoneBooks(phoneBooks.concat(newPhoneBook));
      nextId.current += 1;
    },
    [phoneBooks]
  );

  const onRemove = useCallback((id) => {
    setPhoneBooks(
      phoneBooks.filter((phoneBook) => phoneBook.id !== id),
      [phoneBooks]
    );
  });

  const onEdit = useCallback((id) => {
    setPhoneBooks(
      phoneBooks.map((phoneBook) =>
        phoneBook.id === id ? { ...phoneBook, phoneBook } : phoneBook
      ),
      [phoneBooks]
    );
  });

  return (
    <div>
      <InputForm onInsert={onInsert} />
      <InputList phonebooks={phoneBooks} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
};

export default App;
