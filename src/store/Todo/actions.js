export const TASK_TEXT = 'TASK_TEXT'
export const TASKS = 'TASKS'

//создаем экшн креэйторы
export const setTaskText = taskText => ({
    type: TASK_TEXT,
    payload: taskText
})

export const setTasks = tasks => ({
    type: TASKS,
    payload: tasks
})