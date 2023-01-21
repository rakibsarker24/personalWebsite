import React from "react";
import Home from "./components/page/Home";
import { BrowserRouter,Route,Routes, } from "react-router-dom";
import AllLibrary from "./components/page/AllLibrary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/l" element={<AllLibrary/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
