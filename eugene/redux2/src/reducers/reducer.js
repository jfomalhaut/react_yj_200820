const intialState = {
  count: 0,
  text: "",
};

const Reducer = (state = intialState, { type, value }) => {
  switch (type) {
    case "INCREASE": {
      return { ...state, count: state.count + 1 };
    }
    case "DECREASE": {
      return { ...state, count: state.count - 1 };
    }
    case "SUBMIT_TEXT": {
      return { count: state.count + 10, text: value };
    }
    default: {
      return state;
    }
  }
};

export default Reducer;
