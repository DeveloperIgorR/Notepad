import React from 'react'
const Usersdata = (props) => {
    const [userName, setUserName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    let createUser = ()=>{
        const fullUserName = userName + userLastName
        const fullName = {
            id: Date.now(), title: fullUserName
        }
        setUsers([...props.users, fullName])
    }
    
    return (
        <div>
            <div>
                <input placeholder='Имя' onChange={props.onNameChange(createUser)} value={userName} />
            </div>
            <div>
                <input placeholder='Фамилия' onChange={props.onLastNameChange()} value={userLastName} />
            </div>
            <button onClick={props.onButtonClick()}>Add full name</button>
        </div>
    )
}
export default Usersdata