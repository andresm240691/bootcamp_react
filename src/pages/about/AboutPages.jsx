import React from 'react'
import { useNavigate } from 'react-router-dom';

function AboutPages() {

 
  const navigate = useNavigate();

  const gotToHome = () =>{
    navigate('/')
  }

  const goBack = () =>{
    navigate(-1);
  }

  return (
    <div>
      <h1>About| FAQS page</h1>
      <div>
        <button onClick={gotToHome}>Go to Home</button>
        <button onClick={goBack}>Back</button>
      </div>
    </div>
  )
}

export default AboutPages