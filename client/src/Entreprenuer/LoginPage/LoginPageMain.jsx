import React from 'react'
import "./LoginPageMain.css"
import Loginimage from '../../assets/Rectangle 10.png'
function LoginPageMain() {
  return (
    <div className='container'>
    <div className="ent-loginpage-loginhere">
        <p>Login Here</p>
    </div>
    <div className="ent-loginpage-content">
      <p>Your Journey to Success <br></br>Starts Here</p>
    </div>
    <div className='ent-loginpage-line' ></div>
    
      <div className='ent-loginpage-img_div'>
      <img className='ent-loginpage-img' src={Loginimage}/>
      </div>
    
      <div className='ent-loginpage-loginform'>
      <label class='ent-loginpage-email-label'>Your Email</label>
        <input type="email" className='ent-loginpage-email'/>
      <label class='ent-loginpage-password-label'>Password</label>
      <input type="password" className='ent-loginpage-password'/>
      <button className='ent-loginpage-loginbtn'>Log In</button>
    </div>
    </div>
  
    
    
    
  )
}

export default LoginPageMain