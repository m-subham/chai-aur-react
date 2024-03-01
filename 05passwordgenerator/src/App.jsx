import { useState ,useCallback, useEffect, useRef } from 'react'

function App() {
  const [length , setlength] = useState(5)
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(true);
  const [password , setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
  }
    if (charAllowed) {
      str = "!@#$%^&*()-_=+[]{}|;:',./<>?";
    }

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  
  },[length ,numberAllowed , charAllowed , setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(1,16);
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() => {
    passwordGenerator()
  },[length ,numberAllowed , charAllowed , passwordGenerator ])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500
      bg-gray-700'>
      <h1 className='pb-3 text-center text-white'>Password Generator</h1>
        <div className ="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-2 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}
           className='bg-blue-800 p-3 text-white  font-medium px-3 py-2 shrink-0'>Copy</button>
        </div>
          <div className='flex gap-x-3 m-1'>
            <div className="flex items-center gap-x-1">
              <input type="range" 
              min={4}
              max={100}
              value={length}
              className='courser-pointer'
              onChange={(e)=>{setlength(e.target.value)}}
              />

              <label>Length :{length}</label>
            </div>
          </div>

            <div className='flex items-center gap-x-2 m-1'>
              <input type="checkbox" 
              defaultChecked = {numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) =>!prev);
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className='flex items-center gap-x-2 m-'>
              <input type="checkbox" 
              defaultChecked = {charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
               />
               <label htmlFor="charInput">Characters</label>
            </div>
          
      </div>
    </>
  )
}

export default App
