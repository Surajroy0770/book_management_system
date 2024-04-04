import React from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ViewBook } from './components/ViewBook'
import { AddBook } from './components/AddBook'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Update } from './components/Update'
import { Delete } from './components/Delete'

function App() {


  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/books' element= {<ViewBook/>}/>
          <Route path='/add-book' element= {<AddBook/>}/>
          <Route path='/update/:id' element= {<Update/>}/>
          <Route path='/delete/:id' element= {<Delete/>}/>
        </Routes>
        <ToastContainer/>
      </Router>
    </>
  )
}

export default App
