import React from 'react'
import ReactDOM from 'react-dom/client'
import MyApp, { App1, App2 } from './App.jsx'
import BookApp from './components/BookApp.jsx'
import './index.css'
import TickCounter from './tirsdagsoopgave/TickCounter .jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<MyApp />
    <App1/>
    <App2/>
    <TickCounter/>

*/ 
   <BookApp/>



}
    

    
  </React.StrictMode>,
)
