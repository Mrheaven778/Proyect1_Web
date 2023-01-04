import React from 'react'
import {Routes, Route , NavLink, BrowserRouter} from 'react-router-dom';
import NavComponents from '../components/NavComponents';
const Router = () => {
  return (
    <BrowserRouter>
    <NavComponents/>
    <Routes>
        <Route path='/inicio'></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router
