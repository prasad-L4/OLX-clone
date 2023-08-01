import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/Context';
import Context from './store/Context'
import {auth} from './FireBase/Config';
import Signup from './Components/Signup/Signup';


ReactDOM.render(
     <FirebaseContext.Provider value={{auth}}>
        <Context>

          <App />
        </Context>
    
    </FirebaseContext.Provider>
, document.getElementById('root'));
