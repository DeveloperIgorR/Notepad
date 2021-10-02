import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../src/store/reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
