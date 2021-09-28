import { useState } from "react"
import { useDispatch } from "react-redux"
import s from './Todolistpanel.module.css'
const Todopanel = (props) => {
    // const [tasks, setTasks] = useState([])
    // const [taskText, setTaskText] = useState('')
    const dispatch = useDispatch()
    
    let onButtonClick = () => {
        const newTask = {
        id: Date.now(), title: props.taskText,completed:false
    }
        console.log(newTask)
        props.setTasks(...props.tasks, newTask)
        console.log(props.tasks)
        props.setTaskText('')
    } 

    let onButtonDelClick = (task )=> {
        let filtredTasks = props.tasks.filter(item => item.id != task.id)
        console.log(task.id)
        props.setTasks(filtredTasks)
    }

    let onTextChange = (event) => {
        props.setTaskText(event.target.value)
        
    }
    let onFlagChange = (event,task)=>{
        let taskChecked = props.tasks.map(markedtask=>
            markedtask.id===task.id
            ?{...task,completed:!task.completed}
            :markedtask
            )
        props.setTasks(taskChecked)
    }
    let toDoListTasks = props.tasks.map(task => <li>
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
                        onChange={onTextChange} value={props.taskText}></input>
                </div>
                <div>
                    <button onClick={onButtonClick}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default Todopanel