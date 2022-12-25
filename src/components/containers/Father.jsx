import React, {useState} from 'react'
import Chiild from '../pure/Child'

const Father = () => {

  const [name, setName] = useState('Andres')


  function showMessage(text){
    alert(`Message recesive: ${text}`)
  }

  function updateName(newName){
    setName(newName);
  }

  return (
    <div style={{backgroundColor: 'tomato', padding: '10px'}}>
        <Chiild name={name} update={updateName} send={showMessage}></Chiild>
    </div>
  )
}


export default Father