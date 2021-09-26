import { useState } from "react"
import s from './Todolistpanel.module.css'
const Todopanel = () => {
    const [tasks, setTasks] = useState([])
    const [taskText, setTaskText] = useState('')
    
    
    let onButtonClick = () => {
        const newTask = {
        id: Date.now(), title: taskText,completed:false
    }
        setTasks([...tasks, newTask])
        setTaskText('')
    } 

    let onButtonDelClick = (task )=> {
        let filtredTasks = tasks.filter(item => item.id != task.id)
        setTasks(filtredTasks)
    }

    let onTextChange = (event) => {
        setTaskText(event.target.value)

    }
    let onFlagChange = (event,task)=>{
        let taskChecked = tasks.map(markedtask=>
            markedtask.id===task.id
            ?{...task,completed:!task.completed}
            :markedtask
            )
        setTasks(taskChecked)
    }
    let toDoListTasks = tasks.map(task => <li>
        <div>
            <span className={task.completed==true?s.checked:s.unchecked}>{task.title}</span>
            <input type='checkbox' checked={task.completed} onChange={event=>onFlagChange(event,task)}/>
            <button onClick={()=>onButtonDelClick(task)}>Delete Task</button>
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