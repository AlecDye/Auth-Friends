import React, { useState } from "react"

import { axiosWithAuth } from "../utils/axiosWithAuth"

const FriendsForm = () => {
    const [newFriend, setNewFriend] = useState({
        id: 0,
        name: "",
        age: 1,
        email: ""
    });

    const handleChanges = e => {
        e.preventDefault();
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("friends")
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log("Add newFriend broke", err)
            })
    }

    return (
        <form className="friends-form" onSubmit={handleSubmit}>
            <input
                className="name-input"
                type="text"
                name="name"
                value={newFriend.name}
            />
            <input
                className="age-input"
                type="number"
                name="age"
                value={newFriend.age}
            />
            <input
                className="email-input"
                type="text"
                name="email"
                value={newFriend.email}
            />
            <button>Add Friend</button>
        </form>
    )
}

export default FriendsForm;