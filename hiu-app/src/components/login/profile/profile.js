import React, { useState } from 'react'

function Prof () {
  const [email, setEmail] = useState('')
  const [username, setUser] = useState('')
  return (
    <div>
      <input placeholder='email' onChange={(event) => setEmail(event.target.value)} />
      <input placeholder='username' onChange={(event) => setUser(event.target.value)} />
      <p>Your email is:</p>
      <p> {email} </p>
      <p> Your username is: </p>
      <p> {username} </p>
    </div>
  )
}

export default Prof
