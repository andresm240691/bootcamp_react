import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const gotToHome = () =>{
    navigate('/')
  }

  const goBack = () =>{
    navigate(-1);
  }
  
  const goForward =() =>{
    navigate(4)
  }


  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() =>navigate('/profile')}>Profile</button>
      {/* <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Next</button> */}
    </div>
  )
}
