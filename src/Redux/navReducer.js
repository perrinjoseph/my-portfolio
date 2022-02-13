let initialValue = false;

const navReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return !state;
    case "CLOSE_NAV":
      return false;
    default:
      return state;
  }
};

export default navReducer;
