// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

import { useState } from "react";
import ReactDOM from "react-dom/client"
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

//create components
const Home = ()=> (
  <div><h2>TKTL notes app</h2></div>
)

const Notes = ()=>(
  <div><h2>Notes</h2></div>
)

const Users = ()=>(
  <div><h2>Users</h2></div>
)


const App = () => {

  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/notes">notes</Link>
        <Link style={padding} to="/users">users</Link>
      </div>

      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2024</i>
      </div>
    </Router>
  )
}

export default App
