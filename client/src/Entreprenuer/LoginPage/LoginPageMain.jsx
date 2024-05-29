import React from 'react'
import "./LoginPageMain.css"
import Loginimage from '../../assets/Rectangle 10.png'
function LoginPageMain() {
  return (
    <div>
    <div className="ent-loginpage-loginhere">
        <p>Login Here</p>
    </div>
    <div className="ent-loginpage-content">
      <p>Your Journey to Success Starts Here</p>
    </div>
    <div className='ent-loginpage-line' Default></div>
    <div className='ent-loginpage-img_div'>
      <img className='ent-loginpage-img' src={Loginimage}/>
    </div>
    <div className='ent-loginpage-loginform'>
      <label class='ent-loginpage-email-label'>Your Email</label>
      <input type="email" className='ent-loginpage-email'/>
      <label class='ent-loginpage-password-label'>Password</label>
      <input type="password" className='ent-loginpage-password'/>
      <button className='ent-loginpage-login'>Log In</button>
    </div>
    </div>
  )
}

export default LoginPageMain