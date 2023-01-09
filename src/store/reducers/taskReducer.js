import { 
    ADD_TASK, 
    DELETE_TASK, 
    UPDATE_TASK,
} from "../actions/taskActions";
import { LEVELS } from "../../modules/elevels.enum";
import {Task} from '../../modules/task.class';


const initialState = [];

export const taskReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TASK:
            let newTask = new Task(
                action.payload.name, 
                action.payload.description, 
                true, 
                LEVELS.NORMAL
            );
            return [
                ...state,
                newTask
            ]
        
        case DELETE_TASK:
            let states = state.filter(
                (item, index) => (index !== action.payload.index))
            return states;
            
            
        
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

        default:
            return state;
    }


}