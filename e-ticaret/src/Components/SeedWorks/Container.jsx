import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Page/Home";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Container() {
  return (
    <div>
      <Header />
      <Sidebar/>
      <section className="section" >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </div>
  );
}

export default Container;
