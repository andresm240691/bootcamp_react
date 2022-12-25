import React, {useState} from 'react';


const loggedStyle = {
    color: "pink"
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


const GreetingStyle = (props) => {


    const [logged, setlogged] = useState(false);

    return (
        <div style={logged? loggedStyle: unloggedStyle}>
           {logged? 
                <p>Logueado, {props.name}</p>
            :
                <p>No Logueado</p>
            }
            <button onClick={() => {
                console.log("Click Button");
                setlogged(!logged)
            }}>
            {logged? 'Logout': 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyle;
