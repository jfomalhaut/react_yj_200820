import React from "react";
import { useDispatch } from "react-redux";
import useInput from "../customs/useInput";

const Page3 = () => {
  const dispatch = useDispatch();
  const [text, setText] = useInput("");

  const onSubmitText = () => {
    dispatch({ type: "SUBMIT_TEXT", value: text });
  };

  return (
    <div>
      <input value={text} onChange={setText} />
      <button onClick={onSubmitText}>텍스트 보내보기</button>
    </div>
  );
};

export default Page3;
