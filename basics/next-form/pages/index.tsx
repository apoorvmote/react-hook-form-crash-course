import Head from 'next/head'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import Form from '../components/Form'
import FormGroup from '../components/FormGroup'

interface TodoInput {
  title: string
  priority: string
  category: string
}

export default function Home() {

  const { register, handleSubmit } = useForm<TodoInput>({
    defaultValues: {
      title: 'get bread',
      category: 'grocery',
      priority: 'med'
    }
  })

  async function onSubmit(input: TodoInput) {
    
    console.log(input)
  }

  return (
    <div className='h-screen py-8 bg-gray-200'>
      <Head>
        <title>Todo | React hook form</title>
      </Head>
      <main className='max-w-md p-8 mx-auto bg-gray-100 rounded'>
        <h1 className='pb-4 text-2xl text-center'>New Todo: React hook form</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <label htmlFor="todoTitle">Todo title</label>
            <input  autoComplete="off" type="text" name="title" id="todoTitle" ref={register} />
          </FormGroup>
          <div className='grid gap-2 grid-col-1'>
            <label htmlFor="category">Category</label>
            <select name="category" id="category" ref={register} >
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
          <Button type='submit'>Save</Button>
        </Form>
      </main>
    </div>
  )
}
