import { TASK_TEXT } from "./actions"
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
    default:
        return state
}   

    
}