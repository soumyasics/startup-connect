import React,{useState} from 'react'
import "./LoginPageMain.css"
import Loginimage from '../../assets/Rectangle 10.png'
function LoginPageMain() {

  let formvalid=true;

  const [data,SetData]=useState({email:'',password:''})
  const [errors,SetErrors]=useState({email:'',password:''})

  const change=(b)=>{
    const {name,value}=b.target;
    SetData(prevData=>({
      ...prevData,
      [name]:value
    }));
    console.log(data);
    SetErrors(prevData=>({
      ...prevData,
      [name]:''
    }))
  }

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
      <form className='ent-loginpage-loginform'>
        <label className='ent-loginpage-email-label'>Your Email</label>
        <input type="email" name='email' onChange={change} className='ent-loginpage-email'/>
        <label className='ent-loginpage-password-label'>Password</label>
        <input type="password" name='password' onChange={change} className='ent-loginpage-password'/>
        <button className='ent-loginpage-loginbtn'>Log In</button>
      </form>
    </div>
  
    
    
    
  )
}

export default LoginPageMain