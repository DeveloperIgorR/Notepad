import { connect } from "react-redux"
import Todopanel from "./Todolistpanel"
import { setTaskText } from "../../store/Todo/actions"

const TodoListContainer = (props) => {
    return(
        <Todopanel taskText={props.taskText} setTaskText={props.setTaskText} />
    )
}

const mapStateToProps = state => {
    return {
        taskText: state.tasks.taskText
    }
}

const mapDispatchToProps = {
    setTaskText
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoListContainer)