import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = ({ match }) => {
  const title = "What";
  const [data, setData] = useState(9);

  const increase = () => {
    setData(data + 1);
  };

  const decrease = () => {
    setData(data - 1);
  };

  useEffect(() => {
    if (data % 5 === 0) {
      console.log("5의 배수");
    }
  }, [data]);

  return (
    <div>
      <h1> {title} Component</h1>
      <h1>{data}</h1>
      <button onClick={increase}>increment</button>
      <button onClick={decrease}>increment</button>
    </div>
  );
};

export default Home;
