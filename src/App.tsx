import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./app/pages/login/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
