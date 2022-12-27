import React from 'react';
import { ROLES } from '../../../modules/Roles.num';
import { User } from '../../../modules/User.class';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const RegisterFormik = () => {
  
    let user = new User();

    const initValues = {
        username: "",
        email: "",
        password: "",
        confirm: "",
        role: ROLES.USER
    };

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                        .min(5, 'Username too short')
                        .max(10, 'Username too long')
                        .required('Required'),
            email: Yup.string()
                        .email("Invalid email format")
                        .required('Emails is required'),
            // role: Yup.string()
            //     .oneOf(
            //         [ROLES.USER, ROLES.ADMIN], 
            //         "You must be select a role")
            //     .required('Roles is required'), 
            password: Yup.string()
                        .min(6, 'Password too short')
                        .required("Password is required"),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0? true: false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        "Password must match!"
                    )
                }).required("You most confirm the password")            
        }
    );


    const submit = () =>{
        alert("Register User");

    }
  
  
    return (
    <div>
        <h1>Register Form</h1>
        <Formik
            initialValues={initValues}
            validationSchema={registerSchema}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2));
            }}>
            {/*We optain props form formik*/}
            {({errors, touched, isSubmitting}) => (
                <Form>
                    <label htmlFor="username">username</label>
                    <Field id="username" name="username" type="text" placeholder="Your username"/>
                    {
                        errors.username && touched.username &&
                        (
                        <ErrorMessage name='username' component='div'></ErrorMessage>     
                        )
                    }
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="email@email.com" type="email"/>
                    {
                        errors.email && touched.email &&
                        (
                        <ErrorMessage name='email' component='div'></ErrorMessage>     
                        )
                    }
                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" type="password" />
                    {
                        errors.password && touched.password &&
                        (
                        <ErrorMessage name='password' component='div'></ErrorMessage>     
                        )
                    }
                    <label htmlFor="confirm">Confirm password</label>
                    <Field id="confirm" name="confirm" type="password" />
                    {
                        errors.confirm && touched.confirm &&
                        (
                        <ErrorMessage name='confirm' component='div'></ErrorMessage>     
                        )
                    }
                    <button type="submit">Regsiter</button>
                    {isSubmitting ? (<p>Register user...</p>): null}
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default RegisterFormik