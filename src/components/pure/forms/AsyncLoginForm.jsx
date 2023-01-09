import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';


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

const AsyncLoginForm = ({logged, fetching, onLogin}) => {

  // const  navigate = useNavigate(); 

  return (
    <div>
        <h1>Login Form</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={async (values) => {
                // await new Promise((r) => setTimeout(r, 1000));
                // alert(JSON.stringify(values, null, 2));
                // await localStorage.setItem('credentials', values);
                // navigate('/');
                onLogin(values.email, values.password);

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
                    {fetching? (<p>LOADING</p>): null}
                    {isSubmitting ? (<p>Login you  credentials...</p>): null}
                </Form>
            )}
        </Formik>
        {/* <Link to='/register'>Are not you regsiter ? </Link> */}
    </div>
  )
}

export default AsyncLoginForm