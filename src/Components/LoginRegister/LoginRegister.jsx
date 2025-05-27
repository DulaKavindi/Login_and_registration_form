import React from 'react'
import './LoginRegister.css'
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from "react-icons/ri";

const LoginRegister = () => {
  return (
    <div className="wrapper">
      <div className="form-box-login">
        <form action="">

          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="username" required /> 
            <FaUser className="usericon"/>
          </div>
          <br/>

          <div className="input-box">
            <input type="password" placeholder="password" requied />
            <RiLockPasswordFill className="lockicon"/>  
          </div>
          <br/>

          <div className="remember-forgot">
            <label>
              <input type="checkbox"/> Remember me
            </label> <a href="#">Forgot password?</a>
          </div>
          <br/>

          <button type="submit" className="button1">Login</button>

          <div classname="registration-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginRegister
