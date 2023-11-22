import { useForm } from 'react-hook-form'
import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';



export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth()
  const navigate = useNavigate()
  console.log(errors.username)

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks')
  }, [isAuthenticated])

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      {registerErrors.map((error, i)=>(
        <div className='bg-red-500 p-2 text-white' key={i}>{error}</div>
      ))}
      <form onSubmit={handleSubmit(async (values) => {
        signup(values)
      })}>

        <input type="text"
          {...register('username', { requiered: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='Username'
        />
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}

        <input type="email"
          {...register('email', { requiered: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='Email'
        />
        {errors.email && (
          <p className='text-red-500'>Email is required</p>
        )}

        <input type="password"
          {...register('password', { requiered: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          placeholder='Password'
        />
        {errors.password && (
          <p className='text-red-500'>Password is required</p>
        )}

        <button type='submit'>Register</button>

      </form>
    </div>
  )
}
