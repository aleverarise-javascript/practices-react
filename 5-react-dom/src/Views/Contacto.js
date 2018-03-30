import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Contacto extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            phone: this.props.match.params.phone,
        }    
    }
    
    render() {
        return (
            <div>
                <h2> {"Gracias por contactarnos:  " + this.state.phone} </h2>
                <Link to="/:name" >
                    <p>Ir a Home</p>
                </Link>
            </div>
        );
    }
}

Contacto.propTypes = {
    match: PropTypes.any,
}

export default Contacto;