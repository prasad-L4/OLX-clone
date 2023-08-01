import React, { useState ,useContext} from 'react';
import{useNavigate} from "react-router-dom"






import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';
import {initializeApp} from 'firebase/app'
import {createUserWithEmailAndPassword,} from 'firebase/auth'
import { auth } from '../../FireBase/Config';
import { collection,addDoc,updateDoc,getFirestore} from 'firebase/firestore';









export default function Signup() {
  const navigate=useNavigate()
  
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Number, setNumber] = useState('');
  const [Password, setPassword] = useState('');
  const firebase=useContext(FirebaseContext)
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
       const userCredential= await  createUserWithEmailAndPassword(auth, Email, Password,)
       const userId=userCredential.user.uid;
        const db=getFirestore()
        const userCollectionRef=collection(db,'users');
        const data={
        name:Username,
        phone:Number,
        id:userId
        
        
        
      };
      const docRef=await addDoc(userCollectionRef,data)
      
      //console.log("a new dcmnt field has been added",docRef.id)
      navigate('/login')
      
    }catch(err){
      console.log(err);
    }
    
  
      
  
}
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={Number}
            onChange={(e)=>setNumber(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
