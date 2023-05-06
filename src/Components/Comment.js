import React from 'react'
import {UserCircleIcon} from '@heroicons/react/24/solid'

const Comment = ({data})=>{
    const {comment,name,replies} = data
    return (
        <div className='flex p-2 my-2 shadow-sm bg-gray-100 rounded-md'>
            <UserCircleIcon className='h-6 w-6 mr-3'/>
            <div>
            <p>{name}</p>
            <p>{comment}</p>
            </div>
        </div>
    )
}

export default Comment