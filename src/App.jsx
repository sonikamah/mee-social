import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileInformation from "./component/pages/profile";
import About from "./component/pages/about";
import Contact from "./component/pages/contact";
import Home from "./component/pages/home";
import Login from "./component/pages/auth/login";
import Signup from "./component/pages/auth/signup";
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
     <h1>Main Header </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfileInformation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;