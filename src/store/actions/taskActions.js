import { LEVELS } from "../../modules/elevels.enum";

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';


export const addTask = (value) =>{
    return {
        type: ADD_TASK,
        payload:{
            name: value.name,
            description: value.description,
            completed: false,
            level: LEVELS.NORMAL
        }
    }
}

export const updateTask = (index) =>{
    return {
        type: UPDATE_TASK,
        payload: {
            index: index
        }
    }
}

export const deleteTask = (index) =>{
    return {
        type: DELETE_TASK,
        payload: {
            index: index
        }
    }
}