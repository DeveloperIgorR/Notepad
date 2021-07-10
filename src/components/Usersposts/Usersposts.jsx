import React from 'react'
import { useState } from 'react'
import Post from './Post'
import Postpanel from './Postpanel'
import u from './Usersposts.module.css'

const Usersposts = () => {
    const[posts,setPosts] = useState([])
    let createPost = (postElement)=>{
        setPosts([...posts,postElement])
    }
    let delPost = (currentPost)=>{
         let filtredPost = posts.filter(item=>item.id!=currentPost.id)
         setPosts(filtredPost) 
    }
   
    return (
        <div className={u.userposts}>
            <h2>UsersPosts</h2>
            <div>
                <Post posts={posts} delPost={delPost}/>
            </div>
            <div>
                <Postpanel createPost={createPost}/>
            </div>
        </div>
    )
}
export default Usersposts