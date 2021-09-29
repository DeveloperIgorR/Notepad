import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setTasks, setTaskText } from "../../store/Todo/actions"
import s from './Todolistpanel.module.css'

const Todopanel = (props) => {
    // const [tasks, setTasks] = useState([])
    // const [taskText, setTaskText] = useState('')
    const dispatch = useDispatch()
    const taskText = useSelector(state => state.tasks.taskText)
    const tasks = useSelector(state => state.tasks.tasks)
    

    let onButtonClick = () => {
        const newTask = {
        id: Date.now(), title:taskText, completed:false
        }
        console.log(newTask)
        dispatch(setTasks(newTask))
        console.log(tasks)
        dispatch(setTaskText(''))
    } 

    let toDoListTasks = tasks.map(task => <li>
        <div>
            <span className={task.completed==true?s.checked:s.unchecked}>{task.title}</span>
            <input type='checkbox' checked={task.completed} onChange={()=>onFlagChange(task)}/>
            <button onClick={()=>onButtonDelClick(task)}>Delete Task</button>
        </div>
    </li>)

    let onButtonDelClick = (task )=> {
        let filtredTasks = tasks.filter(item => item.id != task.id)
        console.log(task.id)
        dispatch(setTasks(filtredTasks))
    }
    
    let onFlagChange = (task)=>{
        let taskChecked = tasks.map(markedtask=>
            markedtask.id===task.id
            ?{...task,completed:!task.completed}
            :markedtask
            )
       dispatch(setTasks(taskChecked))
    }
    
    
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
                        onChange={event => dispatch(setTaskText(event.target.value))} value={taskText}></input>
                </div>
                <div>
                    <button onClick={onButtonClick}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default Todopanel