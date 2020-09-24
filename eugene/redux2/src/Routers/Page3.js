import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Page3 = () => {
  const dispatch = useDispatch();

  const cart = useSelector((res) => res);

  const onDelete = (id) => {
    dispatch({ type: "REMOVE_CART", id: id });
  };
  return (
    <div>
      {cart.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <button onClick={() => onDelete(item.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default Page3;
