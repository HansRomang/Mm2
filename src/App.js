import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import AddAnItem from "./routes/about";
import Login from "./routes/login";

import Home from './routes/home.jsx';

const Marketplace = () => <h2>Marketplace</h2>;


const AppRouter = () => (
  <Router>
    <div>

      <Route path="/" exact component={Home} />
      <Route path="/login/" component={Login} />
      <Route path="/add-item/" component={AddAnItem} />
    </div>
  </Router>
);

export default AppRouter;
