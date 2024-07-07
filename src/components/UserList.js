import React from 'react'

function UserList({props}) {
  return (
    <div className='userslist'>
        {
            props.map((user)=>(
                <div className="card">
            <img className='propic' src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="" />
            <div className="info">
                <h2>{user.name}</h2>
                <h4>{user.email}</h4>
            </div>
        </div>
            ))
        }
        
    </div>
  )
}

export default UserList