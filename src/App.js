import Header from './components/Header/Header'
import Todopanel from './components/Todolistpanel/Todolistpanel'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Users from './components/Users/Users'
import Navbar from './components/Navbar/Navbar'
import PostPage from './components/PostPage/PostPage'
import SinglePostPage from './components/SinglePostPage/SinglePostPage'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../src/store/reducers'

const store = createStore(rootReducer)

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='wrapper' >
          <Header />
          <Navbar />
          <div className='wrapper-post-components' >
            <Route path='/PostPage' render={() => <PostPage />} />
            <Route path={'/posts/:id'} render={() => <SinglePostPage />} />
          </div>
          <div className='wrapper-components'>
            <Route path='/Todolistpanel' render={() => <Todopanel />} />
            <Route path='/Users' render={() => <Users />} />
          </div>
        </div>
      </BrowserRouter>
    </Provider>

  )
}

export default App
