import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Head from './components/Head.jsx'
import HeroSection from './components/HeroSection.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
     <Head />
    <App />
    <HeroSection/>
  </React.StrictMode>,
)
