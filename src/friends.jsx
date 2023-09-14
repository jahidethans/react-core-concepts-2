import { useEffect, useState } from "react"
import Friend from "./friend"

export default function Friends(){

    const [friends, setFriends]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=> setFriends(data))
    },[])
    

    return(
        <div style={{border: '2px solid yellow',marginBottom: '30px', padding:'20px', backgroundColor:'gray'}}>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend=> <Friend friend={friend}></Friend>)
            }
        </div>
    )
}