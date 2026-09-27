import React from 'react'

const Users = ({name , email , address}) => {
  return (
    <div>
      <h2>Name : {name}</h2>
      <h3>Email : {email}</h3>
    <p>
      Address : {address.street}, {address.suite}, {address.city},{' '}
      {address.zipcode}
    </p>
    </div>
  )
}

export default Users
