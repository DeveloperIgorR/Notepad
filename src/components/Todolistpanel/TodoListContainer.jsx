import { connect } from "react-redux"
import Todopanel from "./Todolistpanel"

const TodoListContainer = (props) => {
    return(
        <Todopanel/>
    )
}

const mapStateToProps = () => {
    return 
}

const mapDispatchToProps = () => {
    return
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoListContainer)