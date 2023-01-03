import React from 'react'
import { useNavigate } from 'react-router-dom';


function ProfilePage() {
    
    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1);
    }


  return (
    <div>
        <h1>Profile Page</h1>
        <button onClick={goBack}>Back</button>
        <button onClick={() => navigate('/task')}>Tasks</button>
    </div>
  )
}

export default ProfilePage