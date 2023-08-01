

import { useContext, useEffect, useState } from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
import { collection, doc,query, getDocs, getFirestore, where } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';
function View() {
  const [UserDetails, setUserDetails] = useState()
  const {PostDetails}=useContext(PostContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(() => {
    const fetchData = async () => {
     
        const { userId } = PostDetails;
        const db = getFirestore();
        const prodtCol = collection(db, 'users');
       
        const querySnapshot=await getDocs(prodtCol)
        const userDoc = querySnapshot.docs.find((doc) => doc.id === userId);

        const prodtList = [];
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          
          setUserDetails(data);
        });
        
       
        
     
        
      
    };
   fetchData();
   
   
  },[] );


  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={PostDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {PostDetails.Price} </p>
          <span>{PostDetails.Name}</span>
          <p>{PostDetails.Category}</p>
          <span>{PostDetails.createdAt}</span>
        </div>
       
       {UserDetails&& <div className="contactDetails">
          <p>Seller details</p>
          <p>{UserDetails.name}</p>
          <p>{UserDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
