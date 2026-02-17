import React from 'react'

const Change = () => {
  return (
    <div className='flex justify-center p-2'>
        <form action="" className='bg-pink-600 rounded-2xl w-2xs'>
          <div className='flex flex-col justify-center'>
            <div className='flex justify-center'>
              🔐
            </div>
            <h1 className='font-bold text-center p-2 text-amber-50'>Wellcome back</h1>
            <p className='text-center text-amber-50'>Creact to account  and sign in now</p>
          </div>
          <div className='p-2 flex justify-center'>
            <button className='border-1 text-amber-100 rounded w-68'>
            🤖
          </button>
          </div>
          <label htmlFor="" className='flex flex-col p-1 text-amber-50'>Username</label>
          <input type="text" className='border-1 text-amber-100 ml-1.5 w-68 rounded'  placeholder='Enter username'/>
          <label htmlFor="" className='flex flex-col p-1 text-amber-50'>Email</label>
          <input type="text" className='border-1 text-amber-100 ml-1.5 w-68 rounded' placeholder='Enter email'/>
          <label htmlFor="" className='flex flex-col p-1 text-amber-50'>Password</label>
          <input type="text" className='border-1 text-amber-100 ml-1.5 w-68 rounded' placeholder='Enter password'/>
          <div className='flex justify-center p-3 '>
            <button type='submit' className='bg-blue-500 w-full rounded text-amber-50 font-bold'>Login</button>
          </div>
        </form>
    </div>
  )
}

export default Change