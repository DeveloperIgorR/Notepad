import { useState } from "react"
const Todopanel = () => {
    const [tasks, setTasks] = useState([])
    const [taskText, setTaskText] = useState('')

    let onButtonClick = () => {
        const newTask = {
            id: Date.now(), title: taskText
        }
        setTasks([...tasks, newTask])
        setTaskText('')
    } 

    let onButtonDelClick = (task )=> {
        let filtredTasks = tasks.filter(item => item.id != task.id)
        setTasks(filtredTasks)
    }

    let onTextChange = ({ target: { value } }) => {
        setTaskText(value)

    }

    let toDoListTasks = tasks.map(task => <li>
        <div>
            <span>{task.title}</span><button onClick={()=>onButtonDelClick(task)}>Delete Task</button>
        </div>
    </li>)

    return (
        <div>
            <h2>ToDoList</h2>
            <div>
                <div>
                    <ul>
                        {toDoListTasks}
                    </ul>
                </div>
                <div>
                    <input placeholder={'Задачи'}
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