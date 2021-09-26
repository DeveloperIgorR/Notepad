export const TASK_TEXT = 'TASK_TEXT'

//создаем экшн креэйтор
export const setTaskText = taskText => ({
    type: TASK_TEXT,
    payload: taskText
})