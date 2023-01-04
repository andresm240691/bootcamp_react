import React, {useState, useEffect} from 'react'
import {getRandomUser} from '../../services/axiosService'


const AxiosExample = () => {
  
  const [user, setUser] = useState(null);
   
  const optainUser = () =>{
    getRandomUser()
        .then((response) =>{
            let data = response.data.results.pop();

            console.log("RESPONSE AXIOS: ", data);
            setUser(data);
        })
        .catch((error)=>{
            alert(`Error Axios ${error}`);
        })
  }
//   useEffect(() => {
//     optainUser();
//   }, []);

  return (
    <div>
        <h1>Axios Exaple</h1>
        {user != null? 
        (
            <div>
                <h2>Name: {user.name.first} {user.name.last}</h2>
                <h3>Email: {user.email}</h3>
                <img alt="avatar" src={user.picture.thumbnail}></img>
            </div>
        ):
        (
            <div>
                <h2>Generate a New User</h2>
                <button onClick={() => optainUser()}>Get User</button>
            </div>
        )
        }    
    </div>
  )
}

export default AxiosExample