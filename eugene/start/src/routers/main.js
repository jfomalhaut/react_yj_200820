import React from "react";

const Main = ({ history }) => {
  const onHome = () => {
    history.push("home/");
  };

  return (
    <div>
      <h1>Main Component</h1>
      <button onClick={onHome}>Home으로</button>
    </div>
  );
};

export default Main;
