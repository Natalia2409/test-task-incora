import React, { useState } from 'react';
import visible from "../img/eye.png";
import invisible from "../img/invisible.png";

function LoginScreen({ changeScreen, error }) {

    const userData = {
        login: 'username',
        pass: 'password'
    }

    const [visibility, setVisibility] = useState(invisible);
    const [typeOfInput, setTypeOfInput] = useState("password");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const changeVisibility = () => {
        if (visibility === invisible) {
            setVisibility(visible);
            setTypeOfInput("text")
        } else {
            setVisibility(invisible);
            setTypeOfInput("password")
        }
    }

    const readUsername = (e) => {
        setUsername(e.target.value);
    }

    const readPassword = (e) => {
        setPassword(e.target.value);
    }

    const checkData = () => {
        if (username === userData.login && password === userData.pass) {
            changeScreen(true);
        } else {
            changeScreen(false)
        }
    }

    return (
        <div className="loginScreen">
            <h2>Log In</h2>
            <p>login here using your username and password</p>
            <div>
                <input type="text" onChange={(e) => readUsername(e)} placeholder="Enter username..." />
                <div className="loginScreen__password">
                    <input onChange={(e) => readPassword(e)} type={typeOfInput} placeholder="Enter password..." />
                    <img className="loginScreen__visibility" onClick={changeVisibility} src={visibility} alt="visibility" />
                </div>
                <div className="loginScreen__error">{error}</div>
            </div>
            <button onClick={checkData} className="loginScreen__btn">Login</button>
        </div>
    )
}

export default LoginScreen;
