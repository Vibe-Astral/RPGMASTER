import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Header from "../components/Header";

function routes() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default routes;
