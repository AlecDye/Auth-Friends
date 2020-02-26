import React, { useState } from 'react';

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
    // console.log("props", props)
    const [state, setState] = useState({
        credentials: {
            username: "",
            password: ""
        }
    });
    //todo: isLoading state to rendering loading animation will data fetches?

    const handleChanges = e => {
        e.preventDefault();
        setState({
            credentials: {
                ...state.credentials,
                [e.target.name]: e.target.value
            }
        })
        // console.log("handleChanges", state)
    }

    const handleLogin = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/login", state.credentials)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload)
                props.history.push("/protected");
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
                    value={state.credentials.username}
                    onChange={handleChanges} />
                <input
                    type="password"
                    name="password"
                    value={state.credentials.password}
                    onChange={handleChanges} />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login;