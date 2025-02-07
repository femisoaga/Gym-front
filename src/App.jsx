import React from "react";
import "./styles/chirofind-responsive.css";
import "./styles/chirofind.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import Nutrition from "./pages/Nutrition/Nutrition";
import Fruit from "./pages/Fruit/Fruit";
import BlogPage from "./pages/BlogPage/BlogPage";
import Article from "./pages/BlogPage/Article";
import Products from "./pages/Fruit/Products";
import Goals from "./pages/Fruit/Goals";
import Diet from "./pages/Nutrition/Diet";
import Subscription from "./pages/Nutrition/Subscription";

const App = () => {
  const location = useLocation();

  const hideHeaderPaths = ["/", "/login", "/register", "/pricing", "/faq", "/preference"];
  return (
    <div>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
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
          <Route path="/nutrition">
            <Route index element={<Nutrition />} /> 
            <Route path="diet" element={<Diet />} />
            <Route path="subscription" element={<Subscription />} />
          </Route>
          <Route path="/fruit">
            <Route index element={<Fruit />} /> 
            <Route path="products" element={<Products />} />
            <Route path="goals" element={<Goals />} />
          </Route>
          <Route path="/blog">
            <Route index element={<BlogPage />} /> 
            <Route path="article" element={<Article />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;
