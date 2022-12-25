/*
uso de props.children
*/

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo Children props</h1>
            <h2>NOMBRE: {props.name}</h2>
            {/* props.children pintara por defecto aquello que se enceuntre entre las etiquetasde apeertura y 
        cierre de este componente desde elcomponente de orden superior*/}    
            {props.children}
        </div>
    );
}

export default Ejemplo4;
