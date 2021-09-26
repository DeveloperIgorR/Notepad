import { TASK_TEXT } from "./actions"

const initialState = {
    taskText: ''
}

export const taskReducer = (state = initialState,action) => {
switch(action.type){
    case TASK_TEXT:
        return {
            ...state,
            taskText: action.payload
        }
}

    return state
}