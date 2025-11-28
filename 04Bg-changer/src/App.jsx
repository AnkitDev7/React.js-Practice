import { useState } from 'react'

export const App = () => {
  const [color, setcolor] = useState("olive");

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>

        <div className='flex flex-wrap justify-center gap-5 shadow-xl bg-white px-3 py-3 rounded-3xl'>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{ backgroundColor: "red" }}
            onClick={() => {
              setcolor('red')
            }}  >Red</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{ backgroundColor: "blue" }}
            onClick={() => {
              setcolor('blue')
            }}> Blue</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{ backgroundColor: "green" }}
            onClick={() => {
              setcolor('green')
            }} >Green</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{ backgroundColor: "grey" }}
            onClick={() => {
              setcolor('grey')
            }}> Grey</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{ backgroundColor: "black" }}
            onClick={() => {
              setcolor('black')
            }}>Black</button>
        </div>
      </div>
    </div>
  )
}
