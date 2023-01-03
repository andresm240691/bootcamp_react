import React from 'react'
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {

  const navidate = useNavigate();

  const logout = () =>{
    navidate("/login");
  }

  return (
    <div>
        <Button variant='contained' onClick={logout}>Log Out</Button>
        <Copyright></Copyright>
    </div>
  )
}

export default DashBoard