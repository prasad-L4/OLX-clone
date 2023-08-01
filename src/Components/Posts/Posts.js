import { useContext, useEffect, useState } from 'react';


import Heart from '../../assets/Heart';
import './Post.css';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { collection, getFirestore,getDoc, getDocs, doc } from 'firebase/firestore';
import { PostContext } from '../../store/PostContext';
import { useNavigate } from 'react-router-dom';


function Posts() {
  //const {firebase}=useContext(FirebaseContext)
  const [Products, setProducts] = useState()
  const {setPostDetails} =useContext(PostContext)
  const navigate=useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const prodtCol = collection(db, 'products');
      const prodtSnapshot = await getDocs(prodtCol);
  
      const prodtList = prodtSnapshot.docs.map((doc) => {
        return {
          id:doc.id,
          ...doc.data()
        };
      });
  
      //console.log(prodtList); // Output the list of products
      setProducts(prodtList);
    };
    
  
    fetchData();
  }, []);
  


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">


          {Products &&Products.map(doc=>{

            return <div
            className="card"
            onClick={()=>{
              setPostDetails(doc)
              navigate('/view')


            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={doc.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{ doc.Price}</p>
              <span className="kilometer">{doc.Category}</span>
              <p className="name"> {doc.name}</p>
            </div>
            <div className="date">
              <span>{doc.createdAt}</span>
            </div>
          </div>

          })}




         




        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={doc.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {doc.price}</p>
              <span className="kilometer">{doc.Category}</span>
              <p className="name"> {doc.name}</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
