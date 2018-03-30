import React from 'react';
import Reflux from 'reflux';
import AppStore from './store/AppStore';
import Actions from './actions/Actions';
import './App.css';

class App extends Reflux.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.store = AppStore;
		this.storeKeys = ['count'];
	}
	
	render() {
		return (
			<div className="App">
				<h1>Contador</h1>
				<label className="App-label">{this.state.count}</label><br/>
				<div>
					<button onClick={() => { Actions.addOne() }}>Agregar</button>
					<button onClick={() => { Actions.minusOne() }}>Restar</button>
				</div>
			</div>
		);
	}
}

export default App;
