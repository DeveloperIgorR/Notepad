import { instance } from "../../components/Todolistpanel/instance"
import { delTask, getAllTasks, onFlagChange, setTasks } from "./actions"

export const fetchAllTasks = () => {
    return  async(dispatch) => {
        const response = await instance.get(`/todos`)
        dispatch(getAllTasks(response.data))

    }
}

export const setNewTask = (newTask) => {
    return  async(dispatch) => {       
        const response = await instance.post(`/todos/create`, newTask)
        dispatch(setTasks(response.data))
    }
}

export const delMarkedTask = (id) => {
    return  async(dispatch) => {      
        const response = await instance.delete(`/todos/delete/${id}`)
        dispatch(delTask(response.data._id))        
    }
}
export const onCheckBox = (task) => {
    return  async(dispatch) => {
        console.log(task.completed)
        const response = await instance.put(`/todos/update/${task._id}`,{ ...task,completed:!task.completed} )
        console.log(response.data)
        dispatch(onFlagChange(response.data))        
    }
}