import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import Home from './Views/home.jsx'
import Contacts from './Views/Contacts.jsx'
import NotFound from './Views/NotFound.jsx'
import Header from './Components/Header.jsx'
import FooterSection from './Components/Footer/FooterSection.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  </React.StrictMode>,
)