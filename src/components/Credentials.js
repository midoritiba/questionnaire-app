import React from 'react'

const Credentials = ({setUser}) => {

    const submitHandler = e => {
        e.target.username.value === '' 
            ?  alert ('Please insert an username') 
            :setUser(e.target.username.value)
    }

  return (
    <form className='form-credentials' onSubmit={submitHandler}>
        <label className='label-credentials' htmlFor="user-form">Insert your username:</label>
        <input className='input-credentials' type="text" id='user-form' placeholder='add name here' name='username' />
    </form>
  )
}

export default Credentials