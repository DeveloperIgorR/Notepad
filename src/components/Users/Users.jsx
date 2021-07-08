import React from 'react'
import { useState } from "react"
import Usersdata from './Usersdata'
import Userslist from "./Userslist"
const Users = (props) => {
    const [users, setUsers] = useState([])
    // const [userName, setUserName] = useState('')
    // const [userLastName, setUserLastName] = useState('')

    const onButtonClick = () => {
        // const fullUserName = userName + userLastName
        // const fullName = {
        //     id: Date.now(), title: fullUserName
        // }
        setUsers([...users, fullName])
        // setUserName('')
        // setUserLastName('')
    }

    const onDelButtonClick = (person) => {
        const newUser = users.filter(item => item.id != person.id)
        // setUsers(newUser)
    }

    const onNameChange = ({ target: { value } }) => {
        // setUserName(value)
    }
    const onLastNameChange = ({ target: { value } }) => {
        // setUserLastName(value)
    }

    return (
        <div>
            <div>
              <Userslist users={users} onDelButtonClick={onDelButtonClick} />
            </div>
            <div>
               <Usersdata users={users} onButtonClick={()=>onButtonClick} 
               onNameChange={onNameChange} onLastNameChange={onLastNameChange}  />
            </div>   
        </div>


    )
}
export default Users