import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import AddAnItem from "./pages/Sell-an-item";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import About from './pages/About.js';
import SignUp from './pages/Sign-up';




const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={About} />
      <Route path="/login/" component={Login} />
      <Route path="/add-item/" component={AddAnItem} />
			<Route path="/marketplace" component={Marketplace} />
			<Route path="/sign-up" component={SignUp} />
    </div>
  </Router>
);

export default AppRouter;
