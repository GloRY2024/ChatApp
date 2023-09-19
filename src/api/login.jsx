import React, {useState} from "react";
import "./css/login.css";

export const Login = (props) => {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", pass);
    }

    const handleUsernameInput = (e) => {
        if (e.key == " ") {
            e.preventDefault();
        }
    }



    return (
        <div className="auth-form-login">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="welcomeForm">
                    <p>Welcome to Discord</p>
                    
                </div>
                
                <div className="login-input-container">
                    <label htmlFor="username">Username</label>

                    <input className="login-user" 
                            type = "text" onChange = {(e) => setUsername(e.target.value)} 
                            placeholder="" 
                            id = "username" 
                            name = "usernmae" 
                            value = {username} 
                            autoComplete="off"
                            onKeyDown={handleUsernameInput}
                            />
                    <label htmlFor="password">Password</label>

                    <input  type = "password" onChange = {(e) => setPass(e.target.value)} placeholder="" id = "password" name = "password" value = {pass}/>
                    <button>Log in</button>
                
                </div>
            
            </form>
            
            <div className="register-link">
                <span> Don't have an account?</span>
            
                <a href="#" onClick={() => props.onFormSwitch('register')}>
                    Register
                </a>    
            </div> 
             
        </div>
    )
}



