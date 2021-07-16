import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Post from './Post'
import Postpanel from './Postpanel'
import u from './Usersposts.module.css'

const Usersposts = () => {
    const[posts,setPosts] = useState([])
    const[postsSorted,setSorted] = useState([])
       
    let sortByEvent = (event)=>{
       const field = event.target.value
       let postsSorted = [...posts].sort((a,b)=>String(a[field]).localeCompare(b[field]))
        setSorted(postsSorted)
        setPosts(postsSorted)
       
    }
    let createPost = (postElement)=>{
        setPosts([...posts,postElement])
    }
    let delPost = (currentPost)=>{
         let filtredPost = posts.filter(item=>item.id!=currentPost.id)
         setPosts(filtredPost) 
    }
    let sortOptions = [
        {value:'id',name:'сортировка по ID'},
        {value:'title',name:'сортировка по названию'}
    ]
    let optionList = sortOptions.map((option)=>{
        return<option value={option.value}>{option.name}</option>
    })
    let getPosts = ()=>{
        return axios.get('https://jsonplaceholder.typicode.com/posts').then(respons=>console.log(respons))
    }
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
                <button onClick={getPosts}>get Posts</button>
            </div>
        </div>
    )
}
export default Usersposts