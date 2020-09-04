import React, { useEffect } from "react";
import Axios from "axios";
import useInput from "../../customs/useInput.js";

const PostInput = () => {
  const [title, setTitle] = useInput("");
  const [content, setContent] = useInput("");

  return (
    <div className="container">
      <form className="post-form">
        <div>
          <input
            value={title}
            onChange={setTitle}
            placeholder="제목을 입력하세요"
          />
        </div>
        <div>
          <input
            value={content}
            onChange={setContent}
            placeholder="내용을 입력하세요"
          />
        </div>
        <button className="btn post">입력</button>
      </form>
      <h1>{title}</h1>
      <h1>{content}</h1>
    </div>
  );
};

export default PostInput;
