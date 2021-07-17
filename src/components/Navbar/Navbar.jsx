import { NavLink } from 'react-router-dom'
import n from './Navbar.module.css'
const Navbar = ()=> {
    return(
        <div className={n.navbar}>
         <div><NavLink to='/Todolistpanel' activeClassName={n.active}>Todopanel</NavLink> </div>
         <div><NavLink to='/Users' activeClassName={n.active}>Users</NavLink></div>
         <div><NavLink to='/SinglePostPage' activeClassName={n.active}>SinglePostPage</NavLink></div>
         <div><NavLink to='/PostPage' activeClassName={n.active}>PostPage</NavLink></div>
        </div>
    )
}
export default Navbar