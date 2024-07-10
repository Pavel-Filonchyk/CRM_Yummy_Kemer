import React from 'react'
import {Route,  Routes} from 'react-router-dom'

import Main from '../Main/Main'
import Dishes from '../Dishes/Dishes'
import Redact from '../Redact/Redact'

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/dishes" element={<Dishes/>}/>
        <Route path="/redact" element={<Redact/>}/>
    </Routes>
  )
}

