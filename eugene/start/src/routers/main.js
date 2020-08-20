import React from "react";

const Main = (props) => {
  const onHome = () => {
    console.log(props);
    props.history.push("home/item_id");
  };
  return (
    <div>
      <h1> Main Component</h1>
      <button onClick={onHome}>Home으로</button>
    </div>
  );
};

export default Main;
