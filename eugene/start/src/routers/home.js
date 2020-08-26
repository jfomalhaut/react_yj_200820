import React, { useState, useEffect } from "react";

const Home = ({ match }) => {
  const title = "HOME";
  const [data, setData] = useState(10);

  const increase = () => {
    setData(data + 1);
  };

  const decrease = () => {
    setData(data - 1);
  };

  useEffect(() => {
    // 처음 이 컴퍼넌트가 랜더링 될 때.
    console.log(match.params.value);
  }, [match.params.value]);

  useEffect(() => {
    if (data % 5 === 0) {
      console.log("5의 배수입니다");
    }
  }, [data]);

  return (
    <div>
      <h1>{title} Component</h1>
      <h1>{data}</h1>
      <h1>{match.params.value}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
};

export default Home;
