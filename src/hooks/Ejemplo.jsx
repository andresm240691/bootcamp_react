/*
    Ejemplo de uso del hook useState
    Componente de funcion.
    Acceso a su estadoprivadoy modificarlo
*/

import React, {useState} from 'react';


const Ejemplo = () => {

    const intiialvalue = 0;

    const initialPerson = {
        name: "Andres",
        email: "andresm240691@gmail.com"
    }
    
    const [count, setcount] = useState(intiialvalue); 
    const [person, setperson] = useState(initialPerson);    
    
    function incrementCount(){
        setcount(count + 1);
    }


    function updatePerson(){
        setperson({
            name: "Daniel",
            email: "danielm1417@gmail.com"
        })
    }

    return (
        <div>
            <h1>Ejejmplo useState</h1>
            <h2>Count:{ count}</h2>
            <h2>DATOS DE LA PERSONA</h2>
            <h3>NOMBRE: {person.name}</h3>
            <h3>EMAIL: {person.email}</h3>
            <div>
                <button onClick={incrementCount}>Auemntar Contador</button>
                <button onClick={updatePerson}>Actualizar Persona</button>
            </div>
        </div>
    );
};


export default Ejemplo;

