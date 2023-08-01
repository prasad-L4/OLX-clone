import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';


import Logo from '../../olx-logo.png';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FireBase/Config';

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("")
  const navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,Email,Password).then(()=>{
      navigate('/')
      

    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}

            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{
          navigate("/signup")
        }} >Signup</a>
      </div>
    </div>
  );
}

export default Login;
