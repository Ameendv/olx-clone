import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Firebase from './firebase/config';
import Context from './store/Context'
import { FirebaseContext } from './store/Context'

ReactDOM.render(


    <FirebaseContext.Provider value={{ Firebase }}>
        <Context>
            <App />
        </Context>

    </FirebaseContext.Provider>

    , document.getElementById('root'));
