const updateUiReducer = (state = false, action) => {
  if (action.type === "updateUI") {
    return action.payload;
  } else {
    return state;
  }
};

export default updateUiReducer;
