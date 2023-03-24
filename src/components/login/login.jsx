import { useState } from "react";
import "./login.css";
const Login = () => {
    const [hide, setHide] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);
    if (localStorage.getItem("loggedIn") === "true") {
        document.location.href = "/Profile";
    }else return (
        <>  
            <div className="login" style={{ display: hide ? "none" : "flex" }} onClick={()=> {
                setHide(true);
            }}>
                <div className="login__container__header">                    
                    <h1>Sign In</h1>
                </div>
            </div>
            <div className="login__container" style={{ display: hide ? "flex" : "none" }} >
                <div className="login__container__header">
                    <h1 style={{ display: loginFailed ? "flex" : "none"}} className="login-attempt-header">Invalid Login Attempt</h1>

                    <input className="login-form-input" type="text" placeholder="Username: "/>
                    <input className="login-form-input" type="password" placeholder="Password: " />
                    <button className="login-form-input wider hover" type="submit" onClick={() => {
                        // get the username and password from the form
                        // send a request to the server to check if the username and password are valid
                        // if the username and password are valid, set the loginFailed state to false
                        var username = document.getElementsByClassName("login-form-input")[0].value;
                        var password = document.getElementsByClassName("login-form-input")[1].value;
                        if (username === "test" && password === "test") {
                            setLoginFailed(false);
                            localStorage.setItem("loggedIn", "true")
                            document.location.href = "/Landing";
                        } else {
                            setLoginFailed(true);
                        }
                        
                    }} value="Login" >Submit</button>
                </div>
                
            </div>                
        </>
    );
}

export default Login;