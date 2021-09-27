import { connect } from "react-redux"
import Todopanel from "./Todolistpanel"
import { setTaskText } from "../../store/Todo/actions"
import { setTasks } from "../../store/Todo/actions"

const TodoListContainer = (props) => {
    return(
        <Todopanel
          taskText={props.taskText}
          setTaskText={props.setTaskText}
          tasks={props.tasks}
          setTasks={props.setTasks}
          />
    )
}

const mapStateToProps = state => {
    return {
        taskText: state.tasks.taskText,
        tasks: state.tasks.tasks
    }
}

const mapDispatchToProps = {
    setTaskText,
    setTasks
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoListContainer)