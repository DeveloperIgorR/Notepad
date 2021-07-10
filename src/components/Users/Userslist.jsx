import React from 'react'
const Userslist = (props) => {
  return (
    <div>
      {props.users.map(person => <ol>
        <div>
          <span>{person.name}{person.lastName}</span><button onClick={() => props.onDelButtonClick(person)}>Delete person</button>
        </div>
      </ol>)}
    </div>
  )
}
export default Userslist