import React from 'react'
import PostItem from './PostItem'

const Post = (props) => {
    
    return (
        <div>
            {props.posts.map(currentPost =>
                <PostItem createPost={props.createPost} currentPost={currentPost} delPost={props.delPost}/>
            )}
        </div>
    )
}

export default Post