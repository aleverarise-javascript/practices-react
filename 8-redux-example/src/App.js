import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions/index';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.onIncrement = this.onIncrement.bind(this);
		this.onDecrement = this.onDecrement.bind(this);
	}

	onIncrement(e){
		this.props.onIncrement();
	}

	onDecrement(e){
		this.props.onDecrement();
	}

	render() {
		return (
			<div className="App">
				<h2>Contador</h2>
				<label>{this.props.counter}</label>
				<br/><br/>
				<button onClick={this.onIncrement} >Sumar</button>
				<button onClick={this.onDecrement} >Restar</button>
			</div>
		);
	}
}

const mapStateToProps = (value) => {
	return {
		counter: value,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: () =>dispatch(increment()),
		onDecrement: () => dispatch(decrement()),
	}
}

// mapStateToProps => me sirve para recibir el valor como propiedad del store
// mapDispatchToProps => permite los metodos como propiedades y lanzarlos como dispachers

export default connect(mapStateToProps, mapDispatchToProps)(App);
