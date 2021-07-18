import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
const SinglePostPage = ()=>{
    let router = useHistory()
    let goBack = ()=>router.push('/PostPage')
    const params = useParams()
    
    return(
        <div>
         <h2>Вы попали на страницу поста с id={params.id}</h2>
         <button onClick={goBack}>back</button>
        </div>
    )
}
export default SinglePostPage