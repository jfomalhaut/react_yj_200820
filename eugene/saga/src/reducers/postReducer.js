import { Post } from "../actions";

const initialState = {
  data: [],
  isLoaded: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case Post.POSTS_SUCCESS:
      return {
        ...state,
        isLoaded: true,
      };
    case Post.GET_POSTS:
      return {
        ...state,
        data: action.data,
      };
    case Post.REMOVE_POST:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};

export default postReducer;
