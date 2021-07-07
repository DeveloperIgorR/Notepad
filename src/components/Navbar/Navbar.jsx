import { NavLink } from "react-router-dom"
const Navbar = ()=> {
    return(
        <div>
         <div><NavLink to='/Todolistpanel'>Todopanel</NavLink> </div>
         <div><NavLink to='/Users'>Users</NavLink></div>
        </div>
    )
}
export default Navbar