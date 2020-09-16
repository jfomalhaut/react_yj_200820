const pageReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_TEXT":
      return action.value;
    case "RESET_TEXT":
      return action.value;
    default:
      return state;
  }
};

export default pageReducer;
