import React, { useReducer, useContext } from 'react'

//Actions

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';


const myContext = React.createContext(null);

const Points = () =>{

    const state = useContext(myContext);

    return (
        <p> Counter Points: {state.count}</p>
    )

}



const Counter = () => {

   // initial state for reducer
   
   const initialState = {
        count: 0
   }

   //Reducer to change state

   const reducer = (state, action) =>{
        switch (action.type) {
            case INCREMENT:
                return {
                    count: state.count + action.payload.quantity
                }
            case DECREMENT:
                return {
                    count: state.count - action.payload.quantity
                }
            case RESET:
                return {
                    count: 0
                }
            default:
                return state;
        }
   }

   const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <myContext.Provider value={state}>
        <div>
            <Points></Points>
            <button onClick={() => dispatch({
                type: INCREMENT,
                payload:{
                    quantity: 1
                }    
            })}>
            INCREMENT
            </button>
            <button onClick={() => dispatch({
                type: DECREMENT,
                payload:{
                    quantity: 1
                } 
            })}>
            DECREMENT
            </button>
            <button onClick={() => dispatch({type: RESET})}>
            RESET
            </button>
        </div>
    </myContext.Provider>
    
  )
}

export default Counter