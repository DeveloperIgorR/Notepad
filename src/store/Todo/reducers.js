import { TASK_ID, TASK_TEXT } from "./actions"
import { TASKS } from "./actions"

const initialState = {
    taskText: '',
    tasks: []
}

export const taskReducer = (state = initialState,action) => {
switch(action.type){
    case TASK_TEXT:
        return {
            ...state,
            taskText: action.payload
        }
    case TASKS:
        return {
            ...state,                                
            tasks: [...state.tasks, action.payload]
        }
    case TASK_ID:
        return{
            ...state,
            tasks: state.tasks.filter(filtredTask => filtredTask.id != action.payload )
        }    
    default:
        return state
}   

    
}