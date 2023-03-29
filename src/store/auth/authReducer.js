export const authActionType = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
};

const initialState = {
  email: "",
  isAuthorized: false,
};

export const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case authActionType.LOG_IN:
      return {
        ...state,
        email: action.payload,
        isAuthorized: true,
      };
    case authActionType.LOG_OUT:
      return initialState;

    default:
      return state;
  }
};
