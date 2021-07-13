import React from 'react'
import s from './Usersposts.module.css'
const PostItem = (props)=>{
    let onHover = ()=>{
        let hoveredPost = {
        ...props.currentPost,isHover:true
        }
        props.createPost(hoveredPost)
    }
    let offHover = ()=>{
        let unhoveredPost = {
        ...props.currentPost,isHover:false
        }
        props.createPost(unhoveredPost)
    }

      return(
        <div onMouseEnter={onHover} onMouseLeave={offHover}
         className={props.currentPost.isHover==true?s.hovered:s.unhovered}>
            <span>
                <p>{props.currentPost.data}</p>
                <button onClick={() => props.delPost(props.currentPost)}>DelPost</button>
            </span>
        </div>
    )
}
export default PostItem 