import React, {useState} from 'react'

const registerForm = () => {

    const initialRegister = [
        {
            user:"",
            name: "",
            email: "",
            password: ""
        }

    ];

    const [dataRegister, setRegister] = useState(initialRegister);


  return (
    <div>registerForm</div>
  )
}

export default registerForm