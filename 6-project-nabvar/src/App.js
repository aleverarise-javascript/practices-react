import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar';
import Home from './views/Home';
import Bio from './views/Bio';
import Description from './views/Description';
import ContactUs from './views/ContactUs';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container-fluid sin-padding">
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route path="/bio" component={Bio} />
					<Route path="/description" component={Description} />
					<Route path="/contact-us" component={ContactUs} />
				</div>
			</Router>
		);
	}
}

export default App;
