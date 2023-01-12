import React from 'react'
// Context App
export const taskContext = React.createContext(null);

// Actions Reducers
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_PENDING = 'SHOW_PENDING';
export const SHOW_ALL = 'SHOW_ALL';

//Initial task list state
const initialState = [];


export const taskReducer = (state = initialState, action) =>{
    console.log("################### taskReducer #########");
    console.log("STATE", state);
    console.log("ACTION", action);
    console.log("########################################");
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                action.payload.task
            ]
        
        case DELETE_TASK:
            return state.filter(
                (item, index) => (index !== action.payload.index))
            
        case UPDATE_TASK:
            return state.map((item, index) => 
                (index === action.payload.index)?
                {
                    ...item,
                    completed: !item.completed
                }
                :
                item
            )
        case SHOW_COMPLETED:
            return state.filter((item) => item.completed)
        case SHOW_PENDING:
            return state.filter((item) => !item.completed)
        case SHOW_ALL:
            return state;
        default:
            return state;
    }
}

// export const filterReducer = (state = initialState, action) => {
//     console.log("################# filterReducer ##########");
//     console.log("STATE", state);
//     console.log("ACTION", action);
//     console.log("########################################");
//     switch (action.type) {
//         case SHOW_COMPLETED:
//             return state.filter((item) => item.completed)
//         case SHOW_PENDING:
//             return state.filter((item) => !item.completed)
//         case SHOW_ALL:
//             return state;
//         default:
//             return state;
//     }
// }