import React from "react";
import "./styles/chirofind-responsive.css";
import "./styles/chirofind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Pricing from "./pages/Pricing/Pricing";
import Faq from "./pages/Faq/Faq";
import Preference from "./pages/Preference/Preference";
import Layout from "./Layout";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/preference" element={<Preference />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
