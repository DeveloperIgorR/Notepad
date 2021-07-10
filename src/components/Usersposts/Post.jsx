import React from 'react'

const Post = (props) => {
    return (
        <div>
            {props.posts.map(currentPost =>
                <span><p>{currentPost.data}</p><button onClick={() => props.delPost(currentPost)}>DelPost</button></span>
            )}
        </div>
    )
}
export default Post