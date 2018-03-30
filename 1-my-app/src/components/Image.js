import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this); 
    }
    onClick(e){
        this.props.onClickChild();
    }
    render() {
        return (
            <div onClick={this.onClick}>
                <p> {"Image ID (Deme Click): " + this.props.id} </p>
                <img src={this.props.src} className="App-logo" alt="logo" />
            </div>
        );
    }
}

Image.propTypes = {
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    onClickChild: PropTypes.func.isRequired,
};

export default Image; 