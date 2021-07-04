import { useState } from "react"

const Todopanel = ()=>{
    const  [tasks,setTasks] = useState([])
    const [taskText,setTaskText] = useState('')
    let onButtonClick = ()=>{
        setTasks()
    }
    let onTextChange = (e)=>{
        setTaskText(e.currentTarget.value)
    }
    let toDoListTasks = tasks.map(p=><li>{p.text}</li>)
    return(
        <div>
            <h1>ToDoList</h1>
            <div>
                <div>
                    <ul>
                      {toDoListTasks}
                    </ul>
                </div>
                <div>
                    <input placeholder ={'Подумай,тебе ведь это делать'} 
                           onChange={onTextChange} value={taskText}></input>
                </div>
                <div>
                    <button onClick={onButtonClick}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default Todopanel