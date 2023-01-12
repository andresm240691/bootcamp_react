import React, {useReducer} from 'react'

const FIELD = 'FIELD';
const LOGIN = 'LOGIN';
const ERROR = 'ERROR';
const SUCCESS = 'SUCCESS';
const LOGOUT = 'LOGOUT';


const initialState = {
    username: '',
    password: '',
    error: '',
    isLoggin: false,
    isLoading: false
}

const loginReducer  = (state, action) =>{

        switch (action.type) {
            case FIELD:
                return {
                    ...state,
                    [action.fieldName]: action.payload
                }
            case LOGIN:
                return {
                    ...state,
                    isLoading: true,
                    isLogged: false
                }

            case SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    isLogged: true
                }   
            case ERROR:
                return {
                    ...state,
                    isLoading: false,
                    isLogged: false,
                    error: 'Invalid username or password',
                    username: '',
                    password: ''
                }  
            case LOGOUT:
                return {
                    ...state,
                    isLoading: false,
                    isLogged: false,
                    username: '',
                    password: ''
                } 
        
            default:
                return state;
        }

}



function LoginUseReducer() {

   const [state, dispatch] = useReducer(loginReducer,initialState)
   
   const {username, password, error, isLoading, isLogged} = state;


   const submit = async(e) =>{
    e.preventDefault();
    dispatch({ type: LOGIN });

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
        dispatch({type: SUCCESS});
    }catch(error){
        dispatch({type: ERROR})
    }
  }

  const logOut = () =>{
    dispatch({type: LOGOUT})
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
                            onChange ={(e) => dispatch({
                                type: FIELD, 
                                fieldName: "username", 
                                payload: e.currentTarget.value
                            })}/>
                        <input 
                            type="password" 
                            placeholder='password' 
                            value={password} 
                            onChange ={(e) => dispatch({
                                type: FIELD, 
                                fieldName: "password", 
                                payload: e.currentTarget.value
                            })}/>
                        <button type='submit'>{isLoading? 'Loggin...': 'login'}</button>
                    </form>
                )
            }
        </div>
    </div>
  )
}

export default LoginUseReducer