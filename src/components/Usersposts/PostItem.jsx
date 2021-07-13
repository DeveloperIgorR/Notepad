import React from 'react'

const PostItem = (props)=>{
      return(
        <div>
            <span>
                <p>{props.currentPost.data}</p>
                <button onClick={() => props.delPost(props.currentPost)}>DelPost</button>
            </span>
        </div>
    )
}
export default PostItem 