import { instance } from "../../components/Todolistpanel/instance"
import { getAllTasks } from "./actions"

export const fetchAllTasks = () => {
    return  async(dispatch) => {
        const response = await instance.get(`/todos`)
        dispatch(getAllTasks(response.data))

    }
}