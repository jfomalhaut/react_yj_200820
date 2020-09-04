import React, { useEffect, useState } from "react";
import Items from "../json/fishes.json";
import "./List.css";

const List = () => {
  const [lists, setLists] = useState(Items);

  const listStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "25px",
    margin: "50px auto",
    width: "1000px",
  };

  useEffect(() => {
    setLists(Items);
  }, []);

  const remove = (id) => {
    const newList = lists.filter((item) => item.id !== id);
    setLists(newList);
  };

  const removeAll = () => {
    setLists([]);
  };

  const removeChecked = () => {
    const temp = lists.filter((item) => !item.check);
    setLists(temp);
  };

  const checkAll = () => {
    const flag = lists.some((item) => !item.check);

    if (flag) {
      const temp = lists.map((item) => ({
        ...item,
        check: true,
      }));
      setLists(temp);
    } else {
      const temp = lists.map((item) => ({
        ...item,
        check: false,
      }));
      setLists(temp);
    }
  };

  const onCheck = (id) => {
    const newChecked = lists.map((item) =>
      item.id === id ? { ...item, check: !item.check } : item
    );
    setLists(newChecked);
  };

  return (
    <div className="container">
      <button onClick={checkAll}>전체선택</button>
      <button onClick={removeAll}>전체삭제</button>
      <button onClick={removeChecked}>선택삭제</button>

      <div className="lists" style={listStyle}>
        {lists.map((item) => (
          <div className="item">
            <span
              className={`checkbox ${item.check === true ? "checked" : ""}`}
              onClick={() => onCheck(item.id)}
            />
            <img src={item.src} style={{ width: "100%" }} />
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="price">{item.price}</div>
              <button onClick={() => remove(item.id)}>삭제</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
