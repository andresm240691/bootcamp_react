import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default RegisterPage;
