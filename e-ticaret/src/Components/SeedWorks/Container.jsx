import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Page/Home";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Container() {
  return (
    <div className="container ">
      <Header />
      <section className="section" >
      <Sidebar/>
      <div className="section-content">
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </section>
    </div>
  );
}

export default Container;
