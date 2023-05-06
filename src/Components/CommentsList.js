import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) =>{
    return comments.map((comment,index)=>{
        return <div className='mb-5' key={index}>
            <Comment data={comment} />
            <div className='ml-5 pl-5 border border-l-black'>
                <CommentsList comments={comment.replies}/>
            </div>
        </div>
    })
}

export default CommentsList