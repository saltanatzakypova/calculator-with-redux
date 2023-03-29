export const calculatorActionTypes = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  DIVIDE: "DIVIDE",
  MULTIPLY: "MULTIPLY",
};

const initialState = {
  result: 0,
};

export const calculateReduser = (state = initialState, action) => {
  switch (action.type) {
    case calculatorActionTypes.ADD:
      return {
        ...state,
        result: state.result + action.paylaod,
      };
    case calculatorActionTypes.SUBTRACT:
      return {
        ...state,
        result: state.result - action.paylaod,
      };
    case calculatorActionTypes.DIVIDE:
      return {
        ...state,
        result: state.result / action.paylaod,
      };
    case calculatorActionTypes.MULTIPLY:
      return {
        ...state,
        result: state.result * action.paylaod,
      };

    default:
      return state;
  }
};
