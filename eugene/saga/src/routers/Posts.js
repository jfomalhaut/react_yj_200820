import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../actions";

const Posts = () => {
  const dispatch = useDispatch();
  const data = useSelector(({ postReducer }) => postReducer.data);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const addPost = () => {
    console.log("포스트가져오기");
    dispatch(Post.postsSuccess());
  };

  const onDelete = (id) => {
    dispatch(Post.removePost(id));
  };

  return (
    <div>
      <h1>Home Component</h1>
      <button background="white" onClick={addPost}>
        Add Post
      </button>
      {data.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <button onClick={() => onDelete(item.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
