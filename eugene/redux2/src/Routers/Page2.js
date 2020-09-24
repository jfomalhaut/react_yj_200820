import React from "react";
import { useDispatch } from "react-redux";
import Items from "../json/fishes.json";

const Page2 = () => {
  const dispatch = useDispatch();
  const onCart = (item) => {
    dispatch({ type: "ADD_CART", data: item });
  };

  return (
    <div>
      {Items.map((item) => (
        <div style={{ marginTop: "20px" }}>
          <h1>{item.name}</h1>
          <button onClick={() => onCart(item)}>담기</button>
        </div>
      ))}
    </div>
  );
};

export default Page2;
