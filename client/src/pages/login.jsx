import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-screen flex items-center justify-around bg-gray-100'>
    <div className=''>
        Welcome to the Login Page
    </div>
    <div className=''>
        <form className='bg-white p-6 rounded shadow-md w-96'>
            <h2 className='text-2xl font-bold mb-4'>Login</h2>
            <div className='mb-4'>
                <Label className='block text-gray-700 mb-2' htmlFor='email'>Email</Label>
                <Input type='email' id='email' className='w-full p-2 border border-gray-300 rounded' placeholder='Enter your email' />
            </div>
            <div className='mb-4'>
                <Label className='block text-gray-700 mb-2' htmlFor='password'>Password</Label>
                <Input type='password' id='password' className='w-full p-2 border border-gray-300 rounded' placeholder='Enter your password' />
            </div>
            <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>Login</button>
        </form>
    </div>
    </div>
  )
}

export default Login
