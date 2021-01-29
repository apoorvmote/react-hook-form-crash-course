import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './App.css'

interface TodoInput {
  title: string
  priority: string
  category: string
}

function App() {

  useEffect(() => {

    document.title = 'Todo | React hook form'

  }, [])

  const { register, handleSubmit } = useForm<TodoInput>()

  function onSubmit(input: TodoInput) {
    
    console.log(input)
  }

  return (
    <main className='max-w-md p-8 mx-auto bg-gray-100 rounded'>
      <h1 className='pb-4 text-2xl text-center'>New Todo: React hook form</h1>
      <form className='grid gap-4 grid-col-1' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-2 grid-col-1'>
          <label htmlFor="todoTitle">Todo Title</label>
          <input type="text" autoComplete='off' name='title' id='todoTitle' ref={register} />
        </div>
        <div className='grid gap-2 grid-col-1'>
          <label htmlFor="category">Category</label>
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
            <input type="radio" name="priority" id="low" value='low' defaultChecked className='mr-2' ref={register} />
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
        <button className='py-2 mt-4 text-xl text-white bg-green-700 rounded' type='submit'>Save</button>
      </form>
    </main>
  );
}

export default App;
