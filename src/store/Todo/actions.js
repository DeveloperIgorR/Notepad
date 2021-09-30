export const TASK_TEXT = 'TASK_TEXT'
export const TASKS = 'TASKS'
export const TASK_ID = 'TASK_ID'
export const TASK_COMPLITED = 'TASK_COMPLITED'

//создаем экшн креэйторы
export const setTaskText = taskText => ({
    type: TASK_TEXT,
    payload: taskText
})

export const setTasks = tasks => ({
    type: TASKS,
    payload: tasks
})

export const delTask = id => ({
    type: TASK_ID,
    payload: id
})

export const onFlagChange = id => ({
    type: TASK_COMPLITED,
    payload: id
})
