import React, { useState } from "react"

import { axiosWithAuth } from "../utils/axiosWithAuth"

const FriendsForm = () => {
    const [newFriend, setNewFriend] = useState({
        name: "",
        age: null,
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
            .post("friends", newFriend)
            .then(res => {
                setNewFriend(res.data)
                console.log(res.data)
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
                onChange={handleChanges}
            />
            <input
                className="age-input"
                type="number"
                name="age"
                value={newFriend.age}
                onChange={handleChanges}
            />
            <input
                className="email-input"
                type="text"
                name="email"
                value={newFriend.email}
                onChange={handleChanges}
            />
            <button>Add Friend</button>
        </form>
    )
}

export default FriendsForm;