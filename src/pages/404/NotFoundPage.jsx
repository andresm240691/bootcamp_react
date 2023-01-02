import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>404 not found</h1>
      <button onClick={() =>navigate('/')}>Home</button>
    </div>
  )
}
