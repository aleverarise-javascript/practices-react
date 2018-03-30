import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PubSub from 'pubsub-js';

// COMPONENTS
import Form from './components/Form';

class App extends Component {

	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	

	onClick(e){
		PubSub.publish('GLOBAL_EVENT', true);
	}

	render() {
		return (
			<div className="App">

				<h1 className="App-title">Componente 1</h1>
				<button onClick={this.onClick} >Lanzar Evento</button>
				<Form/>

				<hr/>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
