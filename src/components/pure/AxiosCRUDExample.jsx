import React from 'react';
import { 
    login, 
    getAllPageUsers, 
    getAllusers, 
    getUserByID,
    createUser,
    deleteeUser,
    updateUser
} from '../../services/AciosCRUDServices';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';

const initialValues = {
    email: "",
    password: ""
}

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                    .email("Invalid email format")
                    .required('Emails is required'),
        password: Yup.string()
                    .required("Password is required")

    }
)

const AxiosCRUDExample = () => {

  const authUser = (values) =>{
    login(values.email, values.password)
        .then((response) =>{
            if(response.data.token){
                alert(JSON.stringify(response));
                sessionStorage.setItem('token', response.data.token)
            }else{
                sessionStorage.removeItem('token');
                throw new Error("Login failure");
            }
        })
        .catch((error) => {
            alert(`Error: ${error}`)
            sessionStorage.removeItem('token');
        });
   } 

   const obtainAllUsers = () =>{
        getAllusers()
        .then((response) => {
            alert(response.data.data);
        }).catch((error) => alert(`Error:${error}`));
   }

   const obtainAllPageUsers = (page) =>{
        getAllPageUsers(page)
        .then((response) => {
            alert(response.data.data);
        }).catch((error) => alert(`Error:${error}`));
    }

    const obtainUserByID = (id) =>{
        getUserByID(id)
            .then((response) => {
                alert(response.data.data);
            }).catch((error) => alert(`Error:${error}`));
    }

    const createNewUser = (name, job) =>{
        createUser(name, job)
            .then((response) => {
                if(response.status === 201){
                    alert(response.data);
                }else{
                    throw new Error("User not created");
                }
            }).catch((error) => alert(`Error:${error}`));
    }

    const updateUserByID = (id, name, job) =>{
        updateUser(id, name,job)
            .then((response) =>{
                if(response.status === 200){
                    alert(response.data);
                }else{
                    throw new Error("User not update");
                }
            });
    }

    const deleteUserByID = (id) =>{
        deleteeUser(id)
            .then((response) =>{
                if(response.status === 200){
                    alert(response.data);
                }else{
                    throw new Error("User not delete");
                }
            });
    }

  return (
    <div>
        <h1>Login Form</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={async (values) => {
                authUser(values);
            }}>
            {/*We optain props form formik*/}
            {({errors, touched, isSubmitting}) => (
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="email@email.com" type="email"/>
                    {
                        errors.email && touched.password &&
                        (
                        <ErrorMessage name='email'></ErrorMessage>     
                        )
                    }
                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" type="password" />
                    <button type="submit">Submit</button>
                    {isSubmitting ? (<p>Login you  credentials...</p>): null}
                </Form>
            )}
        </Formik>
        <button onClick={() => obtainAllUsers()}>GET ALL USERS</button>
        <button onClick={() => obtainAllPageUsers()}>GET ALL PAGES USER</button>
        <button onClick={() => obtainUserByID(1)}>USER BY ID: 1</button>
        <button onClick={() => createNewUser("morpheus", "leader")}>Create New user</button>
        <button onClick={() => updateUserByID(2, "Andres", "Programador")}>Update user</button>
        <button onClick={() => deleteUserByID(1)}>Delete User</button>
    </div>
  )
}

export default AxiosCRUDExample;