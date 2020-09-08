import React from "react";

const intialState = {
  count: 0,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREASE": {
      state.count = state.count + 1;
      return state;
    }
    case "DEACREASE": {
      state.count = state.count - 1;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
