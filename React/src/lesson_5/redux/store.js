import { createStore } from "redux";
import { addAndRemoveReducer } from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos: addAndRemoveReducer,
    
});

export const store = createStore(rootReducer);

