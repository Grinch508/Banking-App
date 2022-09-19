import React from 'react'

const CreateAnAccount = () => {
  return (
    <section className='sign-up'>
      <form>
        <h1>Create Account</h1>
        <input  
          type='text' 
          name='firstName'
          id='firstName'
          placeholder='First Name' 
          autoComplete='off'
          required/>
        <br/>
        <input 
          type='text'
          name='lastName'
          id='lastName'
          placeholder='Last Name'
          autoComplete='off'
          required/>
        <br />
        <input 
          type='text'
          id='email'
          name='email'
          placeholder='Email'
          autoComplete='off'
          required/>
        <br />
        <input 
          type='text'
          id='username'
          name='username'
          placeholder='Username'
          autoComplete='off'
          required/>
          <br />
        <input
          type='text'
          id='password'
          name='password'
          placeholder='Password'
          autoComplete='off'
          required />
        <br />
        <button>Create Account</button>
      </form>
    </section>
  )
}

export default CreateAnAccount