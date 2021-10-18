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
export const onCheckBox = (id) => {
    return  async(dispatch) => {      
        const response = await instance.put(`/todos/update/${id}`)
        dispatch(onFlagChange(response.data._id))        
    }
}