import React from 'react'
import Home from './pages/home/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NoPage from './pages/noPage/NoPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/*' element={<NoPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
