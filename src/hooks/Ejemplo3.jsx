/*
    Ejemplo: useState, useContext
*/

import React, {useContext, useState} from 'react';

const myContext = React.createContext(null);

const Component1 = () => {

    const state = useContext(myContext);

    return (
        <div>
            <h1>El token es: {state.token}</h1>
            <Component2></Component2>
        </div>
        
    );
}

const Component2 = () => {

    const state = useContext(myContext);

    return (
        <div>
            <h2>La session es: {state.session}</h2>
        </div>
    );
}


export default function Ejemplo3() {
  
  const initialState = {
    token: "123456",
    session: 1
  };
  
  const [sessionData, setSessionData] = useState(initialState);


  function updateSession(){
        setSessionData({
            token: Math.floor((Math.random() * 100) + 1).toString(),
            session: sessionData.session + 1
        });
   }

  
    return (
        <myContext.Provider value={sessionData}>
        {/* Todopueden leer lso datos de session data  */}
        <h1>*** Ejemplo usestate y useContext ****</h1>
        <Component1></Component1>
        <button onClick={updateSession}> Update Session</button>
        </myContext.Provider>
  )
}





