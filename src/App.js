import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import 

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route 
      path="/" element={<h1>Hello Worlds</h1>}
      />

      <Route 
      path="*" element={<FourOfFour/>}
      />

        </Routes></BrowserRouter></>
  );
}

export default App;
