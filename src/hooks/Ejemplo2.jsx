/**Ejejmplo de uso de useState, useRef, useEfect */
import React, {useState, useEffect, useRef} from 'react';

const Ejemplo2 = () => {

    const [count, setcount] = useState(0); 
    
    const [count2, setcount2] = useState(0); 
    
    // referencia ceada con useref variable con el DOM
    const myRef = useRef();


    function incrementCount(){
        setcount(count + 1)
    }

    function incrementCount2(){
        setcount2(count2 + 1)
    }
    /**
     * Trabajando con useEffect
     */


    /*Caso 1: Ejecutar un sneppet
     Cada vez que cambia el estado del componente se ejecuta
    */

    //  useEffect(() =>{
    //     console.log("Cambio de estadoen el componente");
    //     console.log("Mostrando la referenia del dom:");
    //     console.log(myRef);
    //  });

    /*Caso 2: Ejecutar solo uando cambie el contador 1 */
    // useEffect(() => {
    //     console.log("Cambio de estadoen el componente");
    //     console.log("Mostrando la referenia del dom:");
    //     console.log(myRef);
    // }, [count])

    /*Caso 3: Ejecutar cuando cambie count o count2*/ 
    useEffect(() => {
        console.log("Cambio de estadoen el componente");
        console.log("Mostrando la referenia del dom:");
        console.log(myRef);
    }, [count, count2])

    return (
        <div>
            <h1>**** Usando useSate y useRef *****</h1>
            <h2>CONTADOR 1: {count}</h2>
            <h2>CONTADOR 2: {count2}</h2>
            <h4 ref={myRef}>
                Ejemplo de elemnto referenciado
            </h4>
            <div>
                <button onClick={incrementCount}>Incrementar UNO</button>
                <button onClick={incrementCount2}>Incrementar DOS</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
