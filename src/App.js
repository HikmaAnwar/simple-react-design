import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import FourOfFour from "./404";
import NavBar from "./nav";
import Home from './home'; 
import Login from './allStylesAndComponents/login';
import SignUp from './signup';
import SourceCode from "./sourcecode";


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      
      <Route 
      path="/" element={<Home/>}
      />
      <Route
      path="/sourcecode" element={<SourceCode/>}
      />
      <Route
      path="/login" element={<Login/>}
      />
      <Route 
      path="/signup" element={<SignUp/>}
      />
      <Route 
      path="*" element={<FourOfFour/>}
      />
      

        </Routes>
        </BrowserRouter>
        </>
  );
}

export default App;
