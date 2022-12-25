import React, {useState} from 'react'




const LoginButton = ({action}) => {
     return (
          <button onClick={action}> Login</button>
     );
}

const LogoutButton = ({action}) => {
     return (
          <button onClick={action}> Logout</button>
     );
}

export default function OptionalRender() {

   const [access, setAccess] = useState(true); 

   const [numberNMssages, setNumberMessage] = useState(0);

  const loginAction = () =>{
     setAccess(true);
  }
  
  const logoutAction = () =>{
     setAccess(false);
  }

   let button;
   if(access){
        button = <LoginButton action={logoutAction}></LoginButton>
   }else{
        button = <LogoutButton action={loginAction}></LogoutButton>;
   }

   const addMessages = () =>{
     setNumberMessage(numberNMssages + 1)
   }


  return (
    <div>
        {button}
        {numberNMssages > 0 && <p>You Have: {numberNMssages} new messages</p>}
        {numberNMssages === 0 && <p>There are no new messages</p>}
        <button onClick={() => addMessages()}>ADD Messages</button>
    </div>
  )
}
