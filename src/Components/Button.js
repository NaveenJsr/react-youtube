import React from 'react'

function Button({title}) {
  return (
    <div>
    <button className='py-1 px-4 mx-1 rounded-xl bg-black text-center text-white'>{title}</button>
    </div>
  )
}

export default Button