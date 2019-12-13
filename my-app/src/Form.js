import React, {useState} from 'react';
import {withFormik, Form, Field, Formik} from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
const Forms = props => {
    const [users, setUsers] = useState([]);
 
return (
    <div className='user=form'>
        <Formik>
            <Form>
                <label htmlFor='username'>Username
                <Field component='input' type='text' name='username'/>
                </label>
                <label htmlFor='email'>Email
                <Field component='input' type='text' name='email'/>
                </label>
                <label htmlFor='password'>Password
                <Field component='input' type='text' name='password'/>
                <label htmlFor='role'>Role
                <Field component='input' type='text' name='role'>
                <option value='Admin'>Admin</option>
                <option value='User'>User</option>
                <option value='Guest'>Guest</option>
                </Field>
                </label>
                </label>
            </Form>
        </Formik>
        {console.log('users: ', users)}
      {users.map(user => (
        <ul key={user.id}>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
          <li>Password: {user.password}</li>
          <li>Role: {user.role}</li>
        </ul>
      ))}
    </div>
)
}
export default Forms;