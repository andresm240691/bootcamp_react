import { todosReducer } from "./todoReducer";
import { filterReducer } from "./filterReducer";
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({

    todosState: todosReducer,
    filterState: filterReducer
});