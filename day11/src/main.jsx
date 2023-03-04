import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UseStateHook from './hooks/useStateHook'
import UseEffectHook from './hooks/useEffectHook'
import UseMemoHook from './hooks/useMemoHook'
import UseRefHook from './hooks/useRefHook'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseStateHook/> */}
    {/* <UseEffectHook/> */}
    {/* <UseMemoHook/> */}
    <UseRefHook/>

  </React.StrictMode>,
)
