import React from 'react'
import { useState } from 'react'
import Post from './Post'
import Postpanel from './Postpanel'
import u from './Usersposts.module.css'

const Usersposts = () => {
    const[posts,setPosts] = useState([])
    const[postsSortedTitle,setSortedTitle] = useState([])
    const[postsSortedId,setSortedId] = useState([])
    
    let sortedOnTitle = ()=>{
        let postsSortedTitle = [...posts].sort((a,b)=>a.title.localeCompare(b.title))
        setSortedTitle(postsSortedTitle)
        setPosts(postsSortedTitle)
        console.log(postsSortedTitle)
    }

    let sortedOnId = ()=>{
        let postsSortedId = [...posts].sort((a,b)=>a.id-b.id)
        setSortedId(postsSortedId)
        setPosts(postsSortedId)
    }

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
            <select onChange={sortedOnTitle} onChange={sortedOnId}>
                <option selected disabled>select type of sort</option>
                <option onClick={sortedOnId} value='sortOnId'>sortOnId</option>
                <option onClick={sortedOnTitle} value='sortOnTitle'>sortOnTitle</option>
            </select>
            <div>
                <Post createPost={createPost} posts={posts} delPost={delPost}/>
            </div>
            <div>
                <Postpanel createPost={createPost}/>
            </div>
        </div>
    )
}
export default Usersposts