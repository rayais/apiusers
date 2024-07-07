import React, { useEffect, useState } from 'react'

import axios from 'axios'
import UserList from './UserList'

function Home() {

    const[users,setusers]=useState([])
    useEffect(()=>{

const asy=async()=>{

            try {
                const res=await axios.get("https://jsonplaceholder.typicode.com/users")
                setusers(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        asy()
    },[])
    console.log(users)
  return (
    <div>
        <nav><img src="https://static.vecteezy.com/system/resources/previews/014/550/751/non_2x/people-icon-social-spacing-with-covid-19-patients-to-prevent-the-spread-of-pathogens-free-png.png" alt="logo" />
        <h1>Users list using API</h1>
        </nav>
        <br />
         <UserList props={users}/>
    </div>
  )
}

export default Home