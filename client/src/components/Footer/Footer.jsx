import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (

		<footer className="footer">
      <div className="container">
        <span className="text-muted">Copyright {new Date().getFullYear()}</span>
      </div>
    </footer>

		)
	}
}

export default Footer;