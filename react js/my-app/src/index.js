import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './User';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import Greetings from './Greetings';
import {Side,Side1} from './Main'
import State from './State';
import Customer from './Customer';
import Heading from './Heading';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//  <Header/>
//  <Main/>
//  <Side/>
//  <Side1/>
//  <Footer/>
 
//   </>
// );

root.render(
  <React.StrictMode>
  <>
  <App/>
  </>

  </React.StrictMode>

) 
const user=ReactDOM.createRoot(document.getElementById('user'));

// user.render(
// /* <Greetings name="Hamza">
// <p>How are u?</p>
// <p>lets go</p>
// </Greetings> */
// <React.StrictMode>
// <Greetings name="Hamza" age={19}/>
// <Greetings  age={17}/>
// </React.StrictMode>



// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
