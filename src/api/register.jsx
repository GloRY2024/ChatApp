import React, {useState} from "react";
import "./css/register.css";
export const Register = (props) => {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleUsernameInput = (e) => {
        if (e.key == " ") {
            e.preventDefault();
        }
    }
    return (
        <div className="auth-form-register">
            
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="header"> <p> Create an account </p> </div>
                
                <div className="container">
                    <label htmlFor="username">USERNAME</label>
                    <input  className="user-inputbox" type = "text" onChange = {(e) => setUsername(e.target.value)} placeholder="" id = "username" name = "usernmae" value = {username} autoComplete="off" onKeyDown={handleUsernameInput}/>
                    <label htmlFor="password">PASSWORD</label>
                    <input  type = "password" onChange = {(e) => setPass(e.target.value)} placeholder="" id = "password" name = "password" value = {pass}/>

                    <button>Create</button>
                </div>
            </form>
            <div className="login-link">
                <a href="#" onClick={() => props.onFormSwitch('login')}>
                    Already have an account?
                </a>    
            </div> 
        </div>
    )
}