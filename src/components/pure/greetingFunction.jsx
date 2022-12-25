import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingFunction = (props) => {

    const [age, setage] = useState(29);
    
    const birthday = () =>{
        setage(age + 1)
    }

    return (
        <div>
            <h1>Hola {props.name} desde componente funcional</h1>
            <h2>Tu edad es: {age}</h2>
            <button onClick={birthday}>Aumentar edad</button>
        </div>
    );
};


GreetingFunction.propTypes = {
    name: PropTypes.string
};


export default GreetingFunction;
