import React from 'react'
import { useState } from 'react'
import Usersdata from './Usersdata'
import Userslist from './Userslist'
const Users = (props) => {
    const [users, setUsers] = useState([])
    const addNewUser = (usersProfile)=>{
        setUsers([...users,usersProfile])
    }
    const onDelButtonClick = (person) => {
        const newUser = users.filter(item => item.id != person.id)
        setUsers(newUser)
    }

    
    return (
        <div>
            <div>
              <Userslist users={users} onDelButtonClick={onDelButtonClick} />
            </div>
            <div>
               <Usersdata users={users} addNewUser={addNewUser}/>
            </div>   
        </div>


    )
}
export default Users