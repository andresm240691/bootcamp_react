import { resolveComponentProps } from '@mui/base';
import React, {useState} from 'react'

function LoginUseState() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  
  const submit = async(e) =>{
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try{
        await function login({usernme, passsword}){
            new Promise((resolve, reject) => {
                setTimeout(() =>{
                    if(username === 'admin' && passsword === 'admin'){
                        resolve();
                    }else{
                        reject();
                    }
                }, 2000)
            });
        }
        setIsLogged(true);
        setIsLoading(false);
    }catch(error){
        setError(`Username or password invalid ${error}`);
        setIsLoading(false);
        setUsername('');
        setPassword('');
    }
  }

  const logOut = () =>{
    setIsLogged(false);
    setIsLoading(false);
  }

  return (
    <div className='App'>
        <div>
            {
                isLogged? 
                (
                    <div>
                        <h1>Welcome,{username}</h1>
                        <button onClick={logOut}>
                            Logout
                        </button>
                    </div>
                )
                :
                (
                    <form onSubmit={submit}>
                        {
                            error && <p style={{color: 'tomato'}}>{error}</p>
                        }
                        <input 
                            type="text" 
                            placeholder='username' 
                            value={username} 
                            onChange ={(e) => setUsername(e.currentTarget.value)}/>
                        <input 
                            type="text" 
                            placeholder='password' 
                            value={username} 
                            onChange ={(e) => setPassword(e.currentTarget.value)}/>
                            <button type='submit'>{isLoading? 'Loggin...': 'login'}</button>
                    </form>
                )
            }
        </div>
    </div>
  )
}

export default LoginUseState