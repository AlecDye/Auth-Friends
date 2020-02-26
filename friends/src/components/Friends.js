import React, { useState, useEffect } from "react"

import { axiosWithAuth } from "../utils/axiosWithAuth"
import FriendsCard from "./FriendsCard"

const Friends = () => {
    const [friends, setFriends] = useState([])

    // {
    //     id: 0,
    //     name: "",
    //     age: 0,
    //     email: ""
    // }

    const getData = () => {
        const token = window.localStorage.getItem('token');
        axiosWithAuth()
            .get('friends')
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
            .catch(err => {
                console.log("Error getting data", err)
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="friends-container">
            <h2>Friends Only!</h2>
            {friends.map(friend => {
                return (
                    <FriendsCard
                        key={friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.email} />
                )
            })}
        </div>
    )
}

export default Friends;