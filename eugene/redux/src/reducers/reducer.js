const intialState = {
  count: 0,
  text: "",
};

const reducer = (state = intialState, { type, value }) => {
  switch (type) {
    case "INCREASE": {
      return { count: state.count + 1 };
    }
    case "DECREASE": {
      return { count: state.count - 1 };
    }
    case "SUBMIT_TEXT": {
      return { text: value };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
