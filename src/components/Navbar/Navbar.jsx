import { NavLink } from 'react-router-dom'
import n from './Navbar.module.css'
const Navbar = ()=> {
    return(
        <div className={n.navbar}>
         <div><NavLink to='/Todolistpanel' activeClassName={n.active}>Todopanel</NavLink> </div>
         <div><NavLink to='/Users' activeClassName={n.active}>Users</NavLink></div>
        </div>
    )
}
export default Navbar