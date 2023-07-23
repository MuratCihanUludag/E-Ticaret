import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Page/Home";
import Header from "./Header";
import Sidebar from "./Sidebar";
import DataContext from "../../Context/DataContext";
function Container() {
  const { settings, setSetings } = useContext(DataContext);
  console.log(settings)
  return (
    <div className={`container ${settings.toggle ? 'collapse':''}`}>
      <Header settings={settings} setSetings={setSetings} />
      <section className="section">
        <Sidebar  settings={settings}/>
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
