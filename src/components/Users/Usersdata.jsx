import React from 'react'
import { useState } from 'react'
const Usersdata = (props) => {
    const [userName, setUserName] = useState('')
    const [userLastName, setUserLastName] = useState('')

    let onButtonClick = () => {
        let usersProfile = {
            id: Date.now(), name: userName, lastName: userLastName
        }
        props.addNewUser(usersProfile)
        setUserName('')
        setUserLastName('')
    }

    let onNameChange = ({ target: { value } }) => {
        setUserName(value)
    }
    let onLastNameChange = ({ target: { value } }) => {
        setUserLastName(value)
    }


    return (
        <div>
            <div>
                <input placeholder='Имя' onChange={onNameChange} value={userName} />
            </div>
            <div>
                <input placeholder='Фамилия' onChange={onLastNameChange} value={userLastName} />
            </div>
            <button onClick={onButtonClick}>Add full name</button>
        </div>
    )
}
export default Usersdata