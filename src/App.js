// import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import {Login} from "./api/login";
import {Register} from "./api/register";
function App() {
  const [currentForm, toggleForm] = useState('login');
  
  
  
  return (
    <div className="App">
      {currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}
    </div>
  );
}

export default App;
