import React, { useState, useEffect } from "react"

import { axiosWithAuth } from "../utils/axiosWithAuth"

const Friends = () => {
    const [friends, setFriends] = useState([])

    const getData = () => {
        const token = window.localStorage.getItem('token');
        axiosWithAuth()
            .get('friends')
            .then(res => {
                console.log(res)
                // setFriends(res.data)
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
        </div>
    )
}

export default Friends;