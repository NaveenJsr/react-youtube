import React from 'react'

import CommentsList from './CommentsList'

const commentData = [
    {
        name:'Kritebh',
        comment:'Lorem impsum dolor sit amet, consectetur adip',
        replies:[
            {
                name:'Kritebh',
                comment:'Lorem impsum dolor sit amet, consectetur adip',
                replies:[
                    {
                        name:'Kritebh',
                        comment:'Lorem impsum dolor sit amet, consectetur adip',
                        replies:[
                            {
                                name:'Kritebh',
                                comment:'Lorem impsum dolor sit amet, consectetur adip',
                                replies:[]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name:'Kritebh',
        comment:'Lorem impsum dolor sit amet, consectetur adip',
        replies:[
            {
                name:'Kritebh',
                comment:'Lorem impsum dolor sit amet, consectetur adip',
                replies:[]
            }
        ]
    }
]


function CommentContainers() {
  return (
    <div>
        <h2 className='text-2xl font-bold' >Comments :</h2>
        <CommentsList comments={commentData}/>
    </div>
  )
}

export default CommentContainers