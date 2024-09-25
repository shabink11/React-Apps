import React from 'react'

function Signin() {
  return (
    <div>
      <label htmlFor="email">email</label>
        <input type="email" /><br />
        <label htmlFor="password">password</label>
        <input type="password" /><br />
        <button >Sign in</button>
    </div>
  )
}

export default Signin
