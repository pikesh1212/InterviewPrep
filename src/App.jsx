import { useState } from "react";
import BoxApp from "./components/BoxApp";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import TodoApp from "./components/TodoApp";
import Timer from "./components/TimerApp";
import LazyContainer from "./components/LazyContainer";
import Counter from "./components/Counter";
import Progress from "./components/ProgressBar";

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
          <Route path="/counter" element={<Counter />} />
          <Route path="/progressbar" element={<Progress />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
