import { useState } from "react";
import BoxApp from "./components/BoxApp";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import TodoApp from "./components/TodoApp";
import Timer from "./components/TimerApp";
import LazyContainer from "./components/LazyContainer";

function App() {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services/boxapp" element={<BoxApp />} />
          <Route path="/services/todoapp" element={<TodoApp />} />
          <Route path="/services/timer" element={<Timer />} />
          <Route path="/lazyload" element={<LazyContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
