import { useState } from 'react'


function App() {
  const [color, setColor] = useState("green")

  return (
    <>
      <div className="w-full h-screen " 
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-5 bg-white rounded-3xl px-3 py-2 text-white">
            <button onClick={()=> setColor("red")}  className='outline-none px-4 rounded'style={{backgroundColor:"red"}} >red</button>
            <button onClick={()=> setColor("blue")}className='outline-none px-4 rounded'style={{backgroundColor:"blue"}} >blue</button>
            <button onClick={()=> setColor("pink")}className='outline-none px-4 rounded'style={{backgroundColor:"pink"}} >pink</button>
            <button onClick={()=> setColor("orange")}className='outline-none px-4 rounded'style={{backgroundColor:"orange"}} >orange</button>
            <button onClick={()=> setColor("gray")}className='outline-none px-4 rounded'style={{backgroundColor:"gray"}} >gray</button>
            <button onClick={()=> setColor("white")} className='outline-none px-4 rounded'style={{backgroundColor:"black"}} >black</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
