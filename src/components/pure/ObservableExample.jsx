import React, {useState} from 'react'
import { getNumbers } from '../../services/observableServices'

const ObservableExample = () => {
  
  const [number, setNumber] = useState(0);

  const optainwNumber = () =>{
    console.log("Subcribe to observable")
    getNumbers.subscribe({
        next(newNumber){
            console.log('New number value:', newNumber);
            setNumber(newNumber);
        },
        error(error){
            alert(`EROOR: ${error}`);
            console.log("Error in observable")
        },
        complete(){
            alert(`FINISH ${number}`)
        }
    });
    console.log("Finished receiving number")
    

  }
  
  return (
    <div>
        <h2>Number:{number}</h2>
        <button onClick={() => optainwNumber()}>Optain Number</button>
    </div>
  )
}

export default ObservableExample