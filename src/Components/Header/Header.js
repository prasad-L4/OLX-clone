import React from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useContext } from 'react';
import { AuthContext } from '../../store/Context';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../../FireBase/Config';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const{user} =useContext(AuthContext)

  
  const navigate=useNavigate()
  const handleSignOut=()=>{
    const auth=getAuth()
    signOut(auth).then(()=>{
      navigate('/login')
    })
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow>
          
          </Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow>
          

          </Arrow>
        </div>
        <div className="loginPage">
          {user?"welcome":<span onClick={()=>{navigate("/login")}}>Login</span>}
          
          <hr />
        </div>
       {user&& <span onClick={handleSignOut}>Logout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <Link to={'/create'}>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
