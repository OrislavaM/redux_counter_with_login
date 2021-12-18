import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { counterReducer } from "./counter/reducer";
import { loginReducer } from "./login/reducer";
import todos from "./todos/reduser";
import { rickNMorty } from "./rickNMorty/reducer";

// 1. pure function - without side effects
// 2 always return state in default
// 3 reducer synchronization
// 4 always return new obj

// {type: 'INCREMENT'}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({ counterReducer, loginReducer, todos, rickNMorty }),
    composeEnhancers(applyMiddleware())
);
export default store;
