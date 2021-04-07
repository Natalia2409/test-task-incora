import React, { useState } from 'react';
import LoginScreen from './loginScreen';
import Feed from './Feed';

function Result() {

    const [change, setChange] = useState(false);
    const [error, setError] = useState("")

    const changeScreen = (value) => {
        if (value === true) {
            setChange(value)
        } else {
            setChange(value);
            setError("Enter valid username and password!")
        }
    }

    return (
        <div>
            {!change && <LoginScreen error={error} changeScreen={changeScreen} />}
            {change && <Feed />}
        </div>
    )
}

export default Result
