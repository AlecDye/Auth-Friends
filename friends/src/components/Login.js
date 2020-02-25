import React, { useState } from 'react';

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
    const [state, setState] = useState([]);
    //todo: isLoading state to rendering loading animation will data fetches?

    const handleChanges = e => {
        e.preventDefault();

    }

    const handleLogin = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/login")
            .then(res => {
                window.localStorage.setItem('token', res.data.payload)
                //todo: add path to "/protected"
            })
            .catch(err => {
                console.log("POST request broke", err)
            })
    }

    return (
        <div className="form-container">
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    name="username"
                    onChange={handleChanges} />
                <input
                    type="password"
                    name="password"
                    onChange={handleChanges} />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login;