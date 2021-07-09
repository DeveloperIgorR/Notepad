import React from 'react'
const Usersdata = (props) => {
    const [userName, setUserName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    
    const onButtonClick = () => {
      let usersProfile = ()=>{
        const fullUserName = userName + userLastName
        const fullName = {
            id: Date.now(), title: fullUserName
        }
        console.log(usersProfile)
    }  
    const onNameChange = ({ target: { value } }) => {
            setUserName(value)
        }
    const onLastNameChange = ({ target: { value } }) => {
            setUserLastName(value)
        }
    
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