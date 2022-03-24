import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

export type RootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({

});
export const store = createStore(rootReducer, applyMiddleware(thunk));
