const initialState = [];

const CartReducer = (state = initialState, { type, data, id }) => {
  switch (type) {
    case "ADD_CART": {
      return state.concat(data);
    }
    case "REMOVE_CART": {
      return state.filter((item) => item.id !== id);
    }
    case "REMOVE_ALL": {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default CartReducer;
