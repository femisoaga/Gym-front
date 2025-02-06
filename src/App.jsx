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
import Dashboard from "./pages/Dashboard/Dashboard";
import Workout from "./pages/Workout/Workout";
import Report from "./pages/Workout/Report";
import UpComing from "./pages/Workout/UpComing";
import Achievements from "./pages/Workout/Achievements";
import Header from "./components/Header";
import Yoga from "./pages/Yoga/Yoga";
import Blog from "./pages/Yoga/Blog";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/preference" element={<Preference />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/workout">
            <Route index element={<Workout />} /> 
            <Route path="reports" element={<Report />} />
            <Route path="upcoming" element={<UpComing />} />
            <Route path="achievements" element={<Achievements />} />
          </Route>
          <Route path="/yoga">
            <Route index element={<Yoga />} /> 
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
