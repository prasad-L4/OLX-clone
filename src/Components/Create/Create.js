import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext} from '../../store/Context'
import { getDownloadURL, getStorage,ref, uploadBytes } from 'firebase/storage';
import {storage} from '../../FireBase/Config'
import { collection,addDoc,getFirestore} from 'firebase/firestore'; 
import { useNavigate } from 'react-router-dom';



const Create = () => {
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const [Name, setName] = useState('')
  const [Category, setCategory] = useState('')
  const [Price, setPrice] = useState('')
  const [Image, setImage] = useState(null)
  const navigate=useNavigate()
 
  const date=new Date()

  const handleSubmit=()=>{

    const imageref = storage
      .ref(`/images/${Image.name}`)
      .put(Image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          const db=getFirestore()
        const userCollectionRef=collection(db,'products');
        const data={
        Name,
        Category,
        Price,
        url,
        userId:user.uid,
        
        
        createdAt:date.toDateString()
        
        }
        const docRef= addDoc(userCollectionRef,data)
         
         
          
          
        }) 
        navigate('/') 
      });
      
  }



    


  
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={Name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={Category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input"
             type="number"
              id="fname"
              value={Price}
              onChange={(e)=>setPrice(e.target.value)}
               name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={Image ?URL.createObjectURL(Image):''}></img>
          
            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
