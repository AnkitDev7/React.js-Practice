import React, { useState, useCallback, useEffect, useRef } from 'react'

export const App = () => {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setpassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#&*%~-={}[]/><:;#!$%&";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);


  }, [length, numberAllowed, charAllowed, setpassword]);

  const copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(Password)
  }, [Password]);


  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, charAllowed, passwordGenrator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg  px-4 py-3 my-90 text-orange-500 bg-gray-500'>
        <h1 className='text-white text-center font-bold text-2xl my-3'>Password Genrator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input
            type="text"
            value={Password}
            className='outlin-none w-full py-1 px-3 bg-white text-black'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipbord}
            className='outline-none bg-amber-400 text-black font-medium px-4 py-0.5 shrink-0'>
            Copy
          </button>

        </div>

        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1 text-white font-medium'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer '
              onChange={(e) => {
                setlength(e.target.value)
              }}
            />
            <label>Length:{length}</label>

          </div>
          <div className='flex items-center gap-x-1 text-white font-medium'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setnumberAllowed((prev) => !prev)
              }}

            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 text-white font-medium'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}

            />
            <label htmlFor="charaterInput">Characters</label>

          </div>
        </div>

      </div>

    </>
  )
}
