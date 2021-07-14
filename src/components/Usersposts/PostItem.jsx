import React, { useState } from 'react'
import s from './Usersposts.module.css'
const PostItem = (props)=>{
    const [hovered,setHovered] = useState(false)
    let onHover = ()=>{
        setHovered(true)
    }
    let offHover = ()=>{
        setHovered(false)
    }

      return(
        <div onMouseEnter={onHover} onMouseLeave={offHover}
         className={hovered==true?s.hovered:s.unhovered}>
            <span>
                <p>{props.currentPost.title}</p>
                <button onClick={() => props.delPost(props.currentPost)}>DelPost</button>
            </span>
        </div>
    )
}
export default PostItem 