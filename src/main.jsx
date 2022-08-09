import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './assets/components/Footer/Footer'
import Routes from './Routes'
import './styles/reset.css'
import './styles/style.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes/>
    <Footer />
    
  </React.StrictMode>
)
