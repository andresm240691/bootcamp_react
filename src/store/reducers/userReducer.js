import { 
    API_CALL_FAILURE, 
    API_CALL_REQUEST, 
    API_CALL_SUCCESS 
} from "../actions/asyncActions";

export const initialState = {
    fetching: false,
    token: null,
    error: null,
    logged: false
} 


export const userReducer = (state = initialState, action) =>{

    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null,
                logged: false,
                token: null
            }

        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: null,
                logged: true,
                token: action.payload.token
            }

        case API_CALL_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload.error,
                logged: false,
                token: null
            }
        
        default:
            return state;
    }


}