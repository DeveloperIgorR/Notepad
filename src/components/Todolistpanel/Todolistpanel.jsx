import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setTaskText } from "../../store/Todo/actions"
import { delMarkedTask, fetchAllTasks, onCheckBox, setNewTask } from "../../store/Todo/async.actions"
import s from './Todolistpanel.module.css'

const Todopanel = () => {
    
    const dispatch = useDispatch()
    const taskText = useSelector(state => state.tasks.taskText)
    const tasks = useSelector(state => state.tasks.tasks)

    useEffect(() => {
        dispatch(fetchAllTasks())   
    },[])    

    function onButtonClick (){
        const newTask = {
         title:taskText, completed:false
        }
        dispatch(setNewTask(newTask))
        dispatch(setTaskText(''))
    } 

    let toDoListTasks = tasks.map(task => <li>
        <div>
            <span className={task.completed==true?s.checked:s.unchecked}>{task.title}</span>
            <input type='checkbox' checked={task.completed} onChange={()=>dispatch(onCheckBox(task._id))}/>
            <button onClick={() =>dispatch(delMarkedTask(task._id)) }>Delete Task</button>
            
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