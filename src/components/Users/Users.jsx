import { useState } from "react"

const Userslist = (props)=>{
    return(
      <div>
          {props.usersList}
      </div>
    )
}
const Users = (props) => {
    const [users, SetUsers] = useState([])
    const [userName, SetUserName] = useState('')
    const [userLastName, SetUserLastName] = useState('')

    const onButtonClick = () => {
        const fullUserName = userName + userLastName
        const fullName = {
            id: Date.now(), title: fullUserName
        }
        SetUsers([...users, fullName])
        SetUserName('')
        SetUserLastName('')
    }

    const onDelButtonClick = (person) => {
        const newUser = users.filter(item => item.id != person.id)
        SetUsers(newUser)
    }

    const onNameChange = ({ target: { value } }) => {
        SetUserName(value)
    }
    const onLastNameChange = ({ target: { value } }) => {
        SetUserLastName(value)
    }

    let usersList = users.map(person => <ol>
        <div>
            <span>{person.title}</span><button onClick={() => onDelButtonClick(person)}>Delete person</button>
        </div>
    </ol>)
   
    return (
        <div>
            <div>
              <Userslist usersList={usersList}/>
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