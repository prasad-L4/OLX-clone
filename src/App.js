import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Routes,} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from "./Pages/Create"
import View from './Components/View/View';




/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './FireBase/Config';
import Post from './store/PostContext'

function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
   onAuthStateChanged(auth,(user)=>{
      setUser(user)
     

    })
    
  })
  return (
    <div>
<Post>  
      <Router>
        <Routes>
        
        <Route exact path='/' element={<Home/>}>
      
      </Route>
      

      <Route path='/signup' element={<Signup/>}>
      
      </Route>
      <Route path='/login' element={<Login/>}/>
      
      
      <Route path='/Create' element={<Create/>}>
      
      </Route>
      <Route path='/view' element={<View/>}>
      
      </Route>
        
      </Routes>
      
      </Router>
</Post>   
    </div>
  );
}

export default App;
