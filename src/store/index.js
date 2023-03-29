import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth/authReducer";
import { calculateReduser } from "./calculator/calculatorReducer";

const rootReducer = combineReducers({
  calculate: calculateReduser,
  ahth: authReducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("store hangdid", store.getState());
});
