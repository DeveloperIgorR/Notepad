import { instance } from "../../components/Todolistpanel/instance"
import { getAllTasks, setTasks } from "./actions"

export const fetchAllTasks = () => {
    return  async(dispatch) => {
        const response = await instance.get(`/todos`)
        dispatch(getAllTasks(response.data))

    }
}

export const setNewTask = (newTask) => {
    return  async(dispatch) => {
        const response = await instance.post(`/todos/create`,{newTask})
        dispatch(setTasks(response.data))
    }
}