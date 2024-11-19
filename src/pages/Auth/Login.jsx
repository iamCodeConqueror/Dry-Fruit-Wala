import React from 'react'
import './Form.scss'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="banner_section product "></div>
      <div className="auth_form">
        <h2>Login now</h2>
        <form action="" method="post">

          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' className='input_box' placeholder='Enter Email Address' />
          </div>
          <div className="form_group">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' className='input_box' placeholder='Enter password' />
          </div>
          <div className="form_group">
            <button className='btn'>Submit</button>
          </div>
          <p>Not have an account ? <Link to='/register'> create one</Link></p>
        </form>
      </div>

    </>
  )
}

export default Login
