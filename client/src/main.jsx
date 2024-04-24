import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {Provider} from 'react-redux'
// import {configureStore} from '@reduxjs/toolkit'
// import detailsReducer from './Redux/detailsSlice.js'

// const store = configureStore({
//   reducer:{
//         data:detailsReducer
//   }
// })


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode> 
)
