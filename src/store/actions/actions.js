export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIVILITY_FILTER = 'SET_VISIVILITY_FILTER';


let nextTodoID = 0;

/**
 * 
 * @param {string} text 
 * @returns actions ADD_TODO
 */
export const addTodo = (text) =>{
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID++,
            text: text
        }
    };
}

/**
 * 
 * @param {number} id 
 * @returns action TOGGLE TODO
 */
export const toggleTodo = (id) =>{
    return {
        type: TOGGLE_TODO,
        payload:{
            id
        }
    }
}

/**
 * 
 * @param {string} filter 
 * @returns action SET_VISIVILITY_FILTER
 */
export const setVisifilityFilter = (filter) =>{
    return {
        type: SET_VISIVILITY_FILTER,
        payload:{
            filter
        }
    }
}

