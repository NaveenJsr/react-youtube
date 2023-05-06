import React from 'react'
import {UserCircleIcon} from "@heroicons/react/24/solid"

function ChatMessage({name,message}) {
  return (
    <div className='flex p-2'>
        <UserCircleIcon className='h-6 w-6 mr-3'/>
        <p className='mr-3 font-semibold pr-2'>{name}</p>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage