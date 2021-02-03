import Head from 'next/head'
import { useForm } from 'react-hook-form'
import React from "react"

interface TodoInput {
  title: string
  category: string
  priority: string
}

export default function Home() {

  const defaultValues: TodoInput = {
    title: 'get milk',
    category: 'grocery',
    priority: 'med'
  }

  const { register, handleSubmit, reset } = useForm<TodoInput>({defaultValues})

  function onSubmit(input: TodoInput, event?: React.BaseSyntheticEvent) {
    
    console.log(input)

    event?.target.reset()

    reset({
      title: '',
      category: '',
      priority: 'low'
    })
  }

  return (
    <div className='h-screen py-8 bg-gray-200'>
      <Head>
        <title>Todo | React hook form</title>
      </Head>

      <main className='max-w-md p-8 mx-auto bg-gray-100 rounded'>
        <h1 className='pb-4 text-2xl text-center'>
          New/Edit Todo: React hook form
        </h1>
        <form className='grid gap-4 grid-col-1' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid gap-2 grid-col-1'>
            <label htmlFor="title">Todo Title</label>
            <input type="text" id='title' name='title' ref={register} autoComplete='off' />
          </div>
          <div className='grid gap-2 grid-col-1'>
            <label htmlFor="category">Todo category</label>
            <select name="category" id="category" ref={register}>
              <option value=""></option>
              <option value="grocery">Grocery</option>
              <option value="work">Work</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
          <div className='grid gap-2 grid-col-1'>
            <p>Choose priority</p>
            <div>
              <input type="radio" name="priority" id="low" value='low' className='mr-2' defaultChecked ref={register} />
              <label htmlFor="low">Low</label>
            </div>
            <div>
              <input type="radio" name="priority" id="med" value='med' className='mr-2' ref={register} />
              <label htmlFor="med">Medium</label>
            </div>
            <div>
              <input type="radio" name="priority" id="high" value='high' className='mr-2' ref={register} />
              <label htmlFor="high">High</label>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <button type='button' className='py-2 mt-4 text-xl text-white bg-red-700 rounded' onClick={() => reset()} >Reset</button>
            <button type="submit" className='py-2 mt-4 text-xl text-white bg-green-700 rounded'>Save</button>
          </div>
        </form>
      </main>
    </div>
  )
}
