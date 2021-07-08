import { useState } from "react"
import Userslist from "./Userslist"
const Users = (props) => {
    const [users, setUsers] = useState([])
    const [userName, setUserName] = useState('')
    const [userLastName, setUserLastName] = useState('')

    const onButtonClick = () => {
        const fullUserName = userName + userLastName
        const fullName = {
            id: Date.now(), title: fullUserName
        }
        setUsers([...users, fullName])
        setUserName('')
        setUserLastName('')
    }

    const onDelButtonClick = (person) => {
        const newUser = users.filter(item => item.id != person.id)
        setUsers(newUser)
    }

    const onNameChange = ({ target: { value } }) => {
        setUserName(value)
    }
    const onLastNameChange = ({ target: { value } }) => {
        setUserLastName(value)
    }

    return (
        <div>
            <div>
              <Userslist users={users} onDelButtonClick={onDelButtonClick} />
            </div>
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
export default Users