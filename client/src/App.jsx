import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Components/Auth';
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Error from './Components/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;