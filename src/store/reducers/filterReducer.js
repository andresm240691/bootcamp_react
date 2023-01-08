import { SET_VISIVILITY_FILTER } from "../actions/actions";

let initialState = 'SHOW_ALL';

export const filterReducer = (state=initialState, action) =>{

    switch (action.type) {
        case SET_VISIVILITY_FILTER:
            return action.payload.filter;
        default:
            return state
    }

}