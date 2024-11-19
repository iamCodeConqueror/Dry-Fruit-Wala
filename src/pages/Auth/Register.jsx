import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div className="banner_section product ">
      </div>
      <div className="auth_form">
        <h2>Register now</h2>
        <form action="" method="post">
          <div className="form_group">
            <label htmlFor="name">Name</label>
            <input type="text" required id='name' className='input_box' placeholder='Enter Fullname' />
          </div>
          <div className="form_group">
            <label htmlFor="mobile_no">Mobile No</label>
            <input type="number" required id='mobile_no' className='input_box' placeholder='Enter Mobile No' />
          </div>
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
          <p>Already have an account ? <Link to='/login'>Login</Link>  </p>
        </form>
      </div>
    </>
  )
}

export default Register
