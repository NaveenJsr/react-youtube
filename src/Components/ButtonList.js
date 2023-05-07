import React from 'react'


import Button from './Button'

let ButtonItems = ["All","Mixes","Computer Programming","Music","Live","Computers","Startup Company","Apple","Gadgets","AI","Podcasts","Stock markets"]

function ButtonList() {
  return (
    <div className='flex justify-around'>
      {
         ButtonItems.map((buttonTitle,index)=>{
          return <Button key={index} title={buttonTitle}/>
         })
      }
    </div>
  )
}

export default ButtonList