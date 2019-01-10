import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import AddAnItem from "./components/AddItem/AddItem.js";

const Marketplace = () => <h2>Marketplace</h2>;
const Login = () => <h2>Login</h2>;


const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Marketplace</Link>
          </li>
          <li>
            <Link to="/login/">Login</Link>
          </li>
          <li>
            <Link to="/add-item/">Sell an item!</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Marketplace} />
      <Route path="/login/" component={Login} />
      <Route path="/add-item/" component={AddAnItem} />
    </div>
  </Router>
);

export default AppRouter;
