import Head from 'next/head'

export default function Home() {
  return (
    <div className='h-screen py-8 bg-gray-200'>
      <Head>
        <title>HTML/Browser validation</title>
      </Head>
      <main className='max-w-md p-8 mx-auto bg-gray-100 rounded'>
        <h1 className='pb-4 text-2xl text-center'>HTML/Browser validation</h1>
        <form className='grid gap-4 grid-col-1'>
          <div className='grid gap-2 grid-col-1'>
            <label htmlFor="text">Text</label>
            <input type="text" minLength={3} maxLength={5} autoComplete='off' name="text" id="text" required />
          </div>
          <div className='grid gap-2 grid-col-1'>
            <label htmlFor="pattern">Pattern</label>
            <input type="text" pattern='[a-z]{3,5}' title='3 to 5 lower case letters' autoComplete='off' name="text" id="pattern" required />
          </div>
          <div className='grid gap-2 grid-col-1'>
            <label htmlFor="number">Number</label>
            <input type="number" min={0} max={1} step={0.1} autoComplete='off' name="number" id="number" required />
          </div>
          <div className='grid gap-2 grid-col-1'>
            <label htmlFor="email">Email</label>
            <input type="email" autoComplete='off' name="email" id="email" required />
          </div>
          <div className='grid gap-2 grid-col-1'>
            <label htmlFor="url">Link</label>
            <input type="url" autoComplete='off' name="url" id="url" required />
          </div>
          <div className='grid gap-2 grid-col-1'>
            <label htmlFor="date">Date</label>
            <input type="date" min='2020-12-01' max='2021-02-28' autoComplete='off' name="date" id="date" required />
          </div>
          <button className='py-2 mt-4 text-xl text-white bg-green-700 rounded' type="submit">Submit</button>
        </form>
      </main>
    </div>
  )
}
