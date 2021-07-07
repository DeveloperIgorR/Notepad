import Header from './components/Header/Header'
import Todopanel from './components/Todolistpanel/Todolistpanel'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Users from './components/Users/Users'
import Navbar from './components/Navbar/Navbar'
import Userstasks from './components/Users-tasks/Userstasks'
const App = ()=> {
  return (
    <BrowserRouter>
     <div className = 'wrapper' >
      <Header/>
      <Navbar/>
      <Userstasks />
      <div className ='wrapper-components'>
      <Route path='/Todolistpanel' render={() => <Todopanel/>}/>
      <Route path='/Users' render={() => <Users/>}/>
      </div>
     </div>
    </BrowserRouter>
  )
}

export default App
