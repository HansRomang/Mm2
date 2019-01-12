import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import AddAnItem from "./routes/sell-an-item";
import Login from "./routes/login";
import Marketplace from "./routes/marketplace";

import About from './routes/about.jsx';




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
