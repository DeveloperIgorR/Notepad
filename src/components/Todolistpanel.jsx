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

    let onTextChange = ({ target: { value } }) => {
        setTaskText(value)

    }

    let toDoListTasks = tasks.map(task => <li>
        <div>
            <span>{task.title}</span><button>Delete Task</button>
        </div>
    </li>)

    return (
        <div>
            <h1>ToDoList</h1>
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