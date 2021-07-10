import React from 'react'
import { useState } from 'react'
import u from './Usersposts.module.css'
const Usersposts = () => {
    const[posts,setPosts] = useState([])
    const[postText,setPostText] = useState('')
    
    let collectPost = ({target:{value}})=>{
        setPostText(value)
    }
    let addPost = ()=>{
        let postElement = {
            id:Date.now(),data:postText
        }
        setPosts([...posts,postElement])
        setPostText('')
    }
    let delPost = (currentPost)=>{
         let filtredPost = posts.filter(item=>item.id!=currentPost.id)
         setPosts(filtredPost) 
    }
   
    return (
        <div className={u.userposts}>
            <h2>UsersPosts</h2>
            <div>
                {posts.map(currentPost =>
                <span><p>{currentPost.data}</p><button onClick={()=>delPost(currentPost)}>DelPost</button></span>
                )}
            </div>
            <div>
              <span><input placeholder='Введите текст'onChange={collectPost} value={postText} /><button onClick={addPost}>Add post</button></span>
            </div>
        </div>
    )
}
export default Usersposts