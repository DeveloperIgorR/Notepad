import React from 'react'
import { useState } from 'react'
import Post from './Post'
import Postpanel from './Postpanel'
import u from './Usersposts.module.css'

const Usersposts = () => {
    const[posts,setPosts] = useState([])
    const[postsSortedTitle,setSortedTitle] = useState([])
    const[postsSortedId,setSortedId] = useState([])
    
    let sortedOnTitle = (event)=>{
        let postsSortedTitle = [...posts].sort((a,b)=>a.title.localeCompare(b.title))
        setSortedTitle(postsSortedTitle)
        setPosts(postsSortedTitle)
        
    }

    let sortedOnId = (event)=>{
        let postsSortedId = [...posts].sort((a,b)=>a.id-b.id)
        setSortedId(postsSortedId)
        setPosts(postsSortedId)
    }
    
    let sortByEvent = (event)=>{
       if(event.target.value=='sortOnId'){
        sortedOnId(event)
       }else if(event.target.value=='sortOnTitle'){
        sortedOnTitle(event)  
       }
    }
    let createPost = (postElement)=>{
        setPosts([...posts,postElement])
    }
    let delPost = (currentPost)=>{
         let filtredPost = posts.filter(item=>item.id!=currentPost.id)
         setPosts(filtredPost) 
    }
    let sortOptions = [
        {value:'sortOnId',name:'сортировка по ID'},
        {value:'sortOnTitle',name:'сортировка по названию'}
    ]
    let optionList = sortOptions.map((option)=>{
        <option value={option.value}>{option.name}</option>
    })
    return (
        <div className={u.userposts}>
            <h2>UsersPosts</h2>
            <select onChange={sortByEvent}>
                <option selected disabled>select type of sort</option>
                {optionList}
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