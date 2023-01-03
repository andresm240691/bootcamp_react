import React, {useEffect} from 'react';
import {
    BrowserRouter as Router, 
    Route, 
    Routes, 
    Link, 
    Navigate
} from 'react-router-dom';
import  NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';
import RegisterPage from './pages/auth/RegisterPage.jsx';

const AppRoutingFinal = () => {

  let logged = true;  

  return (
    <Router>
        <Routes>
            <Route exac path='/' element={logged? <DashBoard/>: <Navigate to="/login"/> }/>
            <Route exac path='/dashbaord' element={logged? <DashBoard/>: <Navigate to="/login"/> }/>
            <Route exac path='/login' element={<LoginPage/>}/>
            <Route exac path='/register' element={<RegisterPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoutingFinal