import React, { useEffect, useState } from 'react'

import ChatMessage from './ChatMessage'

import { useSelector,useDispatch } from 'react-redux'
import {addMessage,clearAllMessage} from "../Utils/liveChatSlice"

import { generateName,generateMessage } from '../Utils/Helper'

function LiveChat() {

  const [chat,setChat] = useState("");

  const dispatch = useDispatch();
  
  const allMessages = useSelector((store)=>store.chat.messages)

  useEffect(()=>{
    const interval = setInterval(()=>{
      dispatch(addMessage({
        name:generateName(),
        message:generateMessage(Math.random()*31)
      }))
    },1000)


    return ()=>{
      console.log("Clearing")
      clearInterval(interval)
      dispatch(clearAllMessage())
    }
  },[])

  const handleChatMessages = (e)=>{
    e.preventDefault()
    if(!chat){
      return
    }
    dispatch(addMessage({
      name:"Kritebh",
      message:chat
    }))
    setChat("")
  }


  return (
    <>
      <h3 className='text-xl m-2 font-semibold'>Live Chat</h3>
    <div className='border flex flex-col-reverse border-black p-1 h-[600px] overflow-y-scroll bg-gray-100 rounded-lg mr-1'>
    

      {
        allMessages?.map(({name,message},index)=>{
          return <ChatMessage key={index} name={name} message={message}/>
        })
      }
      </div>
      <form onSubmit={handleChatMessages} className='border border-gray-500 my-3 mr-1 rounded-xl'>
        <input type='text' value={chat} onChange={(e)=>setChat(e.target.value)} className='w-[80%] border border-black p-2 m-3 rounded-lg'></input>
        <button onClick={handleChatMessages} className='px-3 py-2 rounded-lg bg-gray-300'>Reply</button>
      </form>
      </>
    
  )
}

export default LiveChat