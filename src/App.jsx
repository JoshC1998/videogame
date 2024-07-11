import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import MyGames from './MyGames.jsx';
import Discussions from './Discussions.jsx';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-games" element={<MyGames />} />
        <Route path="/discussions" element={<Discussions />} />
      </Routes>
    </div>
  );
}

export default App;