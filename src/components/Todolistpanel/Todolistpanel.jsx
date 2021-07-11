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

    let onTextChange = ({ target: { value } }) => {
        setTaskText(value)

    }
    let onFlagChange = (event,item)=>{
        let taskChecked = tasks.map(task=>
            item.id===task.id
            ?{...task,completed:!task.completed}
            :item
            )
        setTasks(taskChecked)
    }
    let toDoListTasks = tasks.map(task => <li>
        <div>
            <span>{task.title}</span>
            <input type='checkbox' checked={completed} onChange={event=>onFlagChange(event)}/>
            <button onClick={()=>onButtonDelClick(task)}>Delete Task</button>
        </div>
    </li>)
    // const[counter,setCounter] = useState(0)
    
    // let onButPlusclick = ()=>{
              
    //     setCounter(counter+1)
    // }
    
    // let onButMinusClick = ()=>{
        
    //     setCounter(counter-1)
    // }
    return (
        <div>
            {/* <h1>{counter}</h1>
            <button onClick={onButPlusclick}>+</button> <button onClick={onButMinusClick}>-</button>     */}
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