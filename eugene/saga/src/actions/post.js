const POSTS_SUCCESS = "POSTS_SUCCESS";
const GET_POSTS = "GET_POSTS";
const REMOVE_POST = "REMOVE_POST";
const EDIT_POST = "EDIT_POST";

const postsSuccess = () => ({ type: POSTS_SUCCESS });
const getPosts = (data) => ({ type: GET_POSTS, data });
const removePost = (id) => ({ type: REMOVE_POST, id });
const editPost = (id) => ({ type: EDIT_POST, id });

const Post = {
  POSTS_SUCCESS,
  GET_POSTS,
  REMOVE_POST,
  EDIT_POST,
  postsSuccess,
  getPosts,
  removePost,
  editPost,
};

export default Post;
