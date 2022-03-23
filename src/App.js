import './App.css';
import './css/index.css'
import './css/Nav.css'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Landing from './components/pages/Landing/Landing';
import Movies from './components/pages/Movies';
import Movie from './components/pages/Movies/Movie'
import Nav from './components/pages/Nav'
import Login from './components/pages/Login/Login'
import { ContextProvider } from './components/context';
import Shows from './components/pages/Shows/Shows'
import View from './components/pages/View'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getValue } from '@testing-library/user-event/dist/utils';
import { useMemo, useState } from 'react';
// import ProtectedRoute from './components/ProtectedRoute';
// import { useState, useEffect } from 'react';

function App() {
  // const [isAuth, setIsAuth] = useState(true)
  // useEffect(() => {
    
  // }, [])
  const [user,setUser] = useState(null);
  const providerValue = useMemo(() => ({user, setUser}),[user, setUser]);
  return (
    <ContextProvider value={providerValue}>
      <Router>
        <Nav />
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Landing/>}></Route>
          <Route path='/list' element={<Movies/>}></Route>
          <Route path='/movie' element={<Movie/>}></Route>
          <Route path='/shows' element={<Shows/>}></Route>
          <Route path='/view/:id/' name='view' element={<View/>}></Route>
          {/* <Route path='/landing'><landing/></Route> */}
          
        </Routes>
      </Router>
    </ContextProvider>
  );
}
// import Landing from './components/pages/landing';

export default App;
