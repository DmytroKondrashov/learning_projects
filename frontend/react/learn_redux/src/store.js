import { counterReducer } from "./reducer";
import { createStore } from "redux";

export const store = createStore(counterReducer);
