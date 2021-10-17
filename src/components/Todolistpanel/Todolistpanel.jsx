import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { delTask, onFlagChange, setTasks, setTaskText } from "../../store/Todo/actions"
import { instance } from "./instance"
import s from './Todolistpanel.module.css'

const Todopanel = () => {
    // const [tasks, setTasks] = useState([])
    // const [taskText, setTaskText] = useState('')
    const dispatch = useDispatch()
    const taskText = useSelector(state => state.tasks.taskText)
    const tasks = useSelector(state => state.tasks.tasks)
    

    async function onButtonClick (){
        const newTask = {
         title:taskText, completed:false
        }
        try {
            const response = await instance.post(`todos/create`,newTask)
            dispatch(setTasks(response)) 
        }
        catch (e) {
            console.log(e)
        }
                
              
        dispatch(setTaskText(''))
    } 

    let toDoListTasks = tasks.map(task => <li>
        <div>
            <span className={task.completed==true?s.checked:s.unchecked}>{task.title}</span>
            <input type='checkbox' checked={task.completed} onChange={()=>dispatch(onFlagChange(task.id))}/>
            <button onClick={() =>dispatch(delTask(task.id)) }>Delete Task</button>
            
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
                        onChange={event => dispatch(setTaskText(event.target.value))} value={taskText}></input>
                </div>
                <div>
                    <button onClick={() => onButtonClick()}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default Todopanel