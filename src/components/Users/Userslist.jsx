const Userslist = (props) => {
  return (
    <div>
      {props.users.map(person => <ol>
        <div>
          <span>{person.title}</span><button onClick={() => props.onDelButtonClick(person)}>Delete person</button>
        </div>
      </ol>)}
    </div>
  )
}
export default Userslist