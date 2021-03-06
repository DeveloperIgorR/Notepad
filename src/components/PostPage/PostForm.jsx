import React from 'react'
import { useState } from 'react'
const PostForm = (props) => {
    const[postText,setPostText] = useState('')
    
    let collectPost = ({target:{value}})=>{
        setPostText(value)
    }
    let addPost = ()=>{
        let postElement = {
            id:Date.now(),title:postText
        }
        props.createPost(postElement)
        setPostText('')
    }
    return (
        <div>
             <span><input placeholder='Введите текст'onChange={collectPost} value={postText} />
             <button onClick={addPost}>Add post</button></span>
        </div>
    )
}
export default PostForm