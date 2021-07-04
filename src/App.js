import Todopanel from "./components/Todolistpanel"
import { BrowserRouter, Route } from "react-router-dom"
import './App.css'
const App = ()=> {
  return (
    <BrowserRouter>
     <div className = "wrapper" >
      <Todopanel/>
     </div>
    </BrowserRouter>
  )
}

export default App
