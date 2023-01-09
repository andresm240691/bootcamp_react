import { todosReducer } from "./todoReducer";
import { filterReducer } from "./filterReducer";
import {combineReducers} from 'redux';
import { userReducer } from "./userReducer";
import { taskReducer } from "./taskReducer";

export const rootReducer = combineReducers({

    todosState: todosReducer,
    filterState: filterReducer,

    //Async Example login user
    userState: userReducer,
    //task reducer
    taskState: taskReducer
});