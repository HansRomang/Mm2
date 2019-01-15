import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import AddAnItem from "./routes/Sell-an-item";
import Login from "./routes/Login";
import Marketplace from "./routes/Marketplace";

import About from './routes/About.jsx';




const AppRouter = () => (
  <Router>
    <div>

      <Route path="/" exact component={About} />
      <Route path="/login/" component={Login} />
      <Route path="/add-item/" component={AddAnItem} />
			<Route path="/marketplace" component={Marketplace} />
    </div>
  </Router>
);

export default AppRouter;
