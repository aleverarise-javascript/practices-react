import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import './App.css';
import Home from './Views/Home';
import Contacto from './Views/Contacto';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Route exact path="/:name" component={Home} />
						<Route path="/contacto/:phone" component={Contacto} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
