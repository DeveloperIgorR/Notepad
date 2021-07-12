import React from 'react'

const PostItem = (props)=>{
    debugger
    return(
        <div>
            <span><p>{props.currentPost.data}</p><button onClick={() => props.delPost(currentPost)}>DelPost</button></span>
        </div>
    )
}
export default PostItem 