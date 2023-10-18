import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className='bg-gray-300 dark:bg-gray-800 transition-colors min-h-screen grid place-content-center'>
    <App />
    </section>
  </React.StrictMode>,
)
