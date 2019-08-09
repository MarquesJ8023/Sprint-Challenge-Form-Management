import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';


    const UserForm = ({ errors, touched, values, status, handleSubmit }) => {
            const [
                user, 
                setUser
            ] = useState([]);
            useEffect(() => {
              if(status){
                setUser ([...user, status])};
            }, [status]);
                  

            return (
                <div className="user-registration">
              <h1>User Registration</h1>
              <Form>
                <Field type="text" name="name" placeholder="Name" />
                {touched.name && errors.name && <p className="error">{errors.name}</p>}
        
                <Field
                  type="text"
                  name="password"
                  placeholder="Password"
                />
                {touched.password && errors.password && (
                  <p className="error">{errors.password}</p>
                )}
        
                <button type="submit">Submit!</button>
              </Form>
                  <div>
                      {user.map(u => {
                      return <p 
                      key={u.name}> {u.password}</p>
                        })}
                  </div>
            </div>
          );
                };

      const FormikUserRegistration = withFormik({
        mapPropsToValues({ name, password}) {
          return {
            name: name || '',
            password: password || '',
          };
        },
      
        validationSchema: Yup.object().shape({
          name: Yup.string().required("User created successfully"),
          password: Yup.string()
            .min(3, "Password must be 3 characters or longer")
            .required("Password is required")
        }),
      
        handleSubmit(values,{setStatus}) {
          axios
            .post('http://localhost:5000/api/register', values)
            .then(res => { 
              console.log(res)
              setStatus(res.data);
            })
            .catch(err => {
              console.log(err.response);
            });
        }
      })(UserForm);
      
export default FormikUserRegistration;
