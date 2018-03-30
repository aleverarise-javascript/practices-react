import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.match.params.name,
        }
    }
    
    render() {
        console.log(this.props.match);
        return (
            <div>
                <h2> {"Bienvenido a casa " + this.state.name} </h2>
                <Link to="/contacto/:phone" >
                    <p>Ir a contactanos</p>
                </Link>
            </div>
        );
    }
}

Home.propType = {
    match: PropTypes.any
}

export default Home;