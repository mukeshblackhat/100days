import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UseStateHook from './hooks/useStateHook'
import UseEffectHook from './hooks/useEffectHook'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseStateHook/> */}
    <UseEffectHook/>

  </React.StrictMode>,
)
