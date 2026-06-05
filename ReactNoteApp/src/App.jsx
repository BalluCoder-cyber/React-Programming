import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteHandler = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }


  return (
    <div className='h-screen lg:flex w-full text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex flex-col lg:w-1/2 gap-4  items-start p-8'>
        <h1 className='text-3xl font-bold'>Add Notes </h1>
        <input className='border-2 px-5 w-full font-medium py-2 outline-none rounded ' type="text" name="" id=""
          placeholder='Enter Note Title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <textarea className='h-32 border-2 px-5 w-full font-medium py-2 outline-none rounded' placeholder='Enter Details of Note'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}>
        </textarea>
        <button className='active:bg-gray-500 active:scale-98 border-2 px-5 w-full font-medium py-2 outline-none rounded bg-white text-black'>Add Note</button>
      </form>
      <div className=' lg:1/3 lg:border-l-2 pl-18 pt-8 w-full box-border'>
        <h1 className='text-3xl font-bold'>Your Notes </h1>
        <div className='box-border flex flex-wrap gap-5 mt-5 w-full h-160 overflow-auto'>
          {task.map(function (elem, idx) {
            return <div key={idx} className='h-65 w-50 rounded bg-[url(https://png.pngtree.com/background/20250713/original/pngtree-paper-burn-colour-wall-photo-picture-image_3097055.jpg)] bg-cover bg-center   text-black p-4 flex flex-col justify-between'>
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>

                <p className='mt-4 leading-tight font-medium text-gray-600'>{elem.details}</p>
              </div>
              <div>
                <button className='border-2 bg-dard bg-orange-900  w-full text-white rounded p-1'
                onClick={(idx)=>{
                  deleteHandler(idx)
                }}>delete</button>
              </div>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App
