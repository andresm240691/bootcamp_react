import axios from 'axios';

/** 
 * Login with params
 * @param email
 * @param passsword
*/
export const login = (email, password) =>{

    let body = {
        email: email,
        password: password
    }
    // Return a promise
    return axios.post('https://reqres.in/api/login', body);
}

export const getAllusers = () =>{
    return axios.get('https://reqres.in/api/users')
}

export const getAllPageUsers = (page) =>{
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}

export const getUserByID = (id) =>{
    return axios.get(`https://reqres.in/api/users/${id}`)
}

export const createUser = (name, job) =>{
    let body = {
        name: name,
        job: job
    }
    // Return a promise
    return axios.post('https://reqres.in/api/users', body);
}

export const updateUser = (id, name, job) =>{
    let body = {
        name: name,
        job: job
    }
    // Return a promise
    return axios.put(`https://reqres.in/api/users/${id}`, body);
}

export const deleteeUser = (id) =>{
    return axios.delete(`https://reqres.in/api/users/${id}`);
}