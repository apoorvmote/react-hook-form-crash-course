import Head from 'next/head'
import { useForm } from 'react-hook-form'

interface SignUpInput {
  username: string
  age: number
  password: string
  confirmPassword: string
}

export default function Home() {

  const { register, handleSubmit, errors, getValues } = useForm<SignUpInput>({ mode: 'onTouched' })

  function onSubmit(input: SignUpInput) {
    
    console.log(input)
  }

  return (
    <div className='h-screen py-8 bg-gray-200'>
      <Head>
        <title>Validation | React hook form</title>
      </Head>
      <main className='max-w-md p-8 mx-auto bg-gray-100 rounded'>
        <h1 className='pb-4 text-2xl text-center'>Validation: React hook form</h1>
        <form className='grid gap-4 grid-col-1' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid gap-2 grid-col-1'>
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id='username' 
              name='username' 
              autoComplete='off' 
              minLength={3} 
              maxLength={16} 
              required
              ref={register({
                required: {
                  value: true,
                  message: 'Username is required'
                },
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 character long'
                },
                maxLength: {
                  value: 16,
                  message: 'Username must be at most 16 character long'
                }
              })} 
            />
            {errors.username && <p className='text-xl font-bold text-red-500'>⬆️ {errors.username.message}</p>}
          </div>
          <div className='grid gap-2 grid-col-1'>
            <label htmlFor="age">Age</label>
            <input 
              type="number" 
              id='age' 
              name='age' 
              min={18} 
              max={99} 
              step={1}
              required
              ref={register({
                required: {
                  value: true,
                  message: 'Age is required'
                },
                min: {
                  value: 18,
                  message: 'Minimum age must be 18 or more'
                },
                max: {
                  value: 99,
                  message: 'Maximum age must be 99 or less'
                }
              })} 
            />
            {errors.age && <p className='text-xl font-bold text-red-500'>⬆️{errors.age.message}</p>}
          </div>
          <div className='grid gap-2 grid-col-1'>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id='password' 
              name='password' 
              pattern='[a-zA-Z0-9]{6,16}' 
              title='password can have lower case or upper case or number with length of 6 to 16' 
              required
              ref={register({
                required: {
                  value: true,
                  message: 'Password is required'
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,16})(?!.*\s)/,
                  message: 'Password can have at least single upper case, single lower case, number, no spaces and 6 to 16 character long'
                }
              })} 
            />
            {errors.password && <p className='text-xl font-bold text-red-500'>⬆️{errors.password.message}</p>}
          </div>
          <div className='grid gap-2 grid-col-1'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              id='confirmPassword' 
              name='confirmPassword' 
              required 
              ref={register({
                required: {
                  value: true,
                  message: 'Confirm Password is required'
                },
                validate: (value) => {
                  if (value === getValues('password')) return true
                  return "Passwords don't match"
                }
              })}
            />
            {errors.confirmPassword && <p className='text-xl font-bold text-red-500'>⬆️{errors.confirmPassword.message}</p>}
          </div>
          <button className='py-2 mt-4 text-xl text-white bg-green-700 rounded' type="submit">Sign Up</button>
        </form>
      </main>
    </div>
  )
}
