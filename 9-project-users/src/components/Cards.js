import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Cards.css';

class Cards extends Component {

    render() {
        return (
            <div className="Card" >
                <img src={this.props.avatar} className="Cards-img" />
                <p className="Card-text"> {this.props.first_name}  </p>
                <p className="Card-text"> {this.props.last_name} </p>
            </div>
        );
    }
}


Cards.propTypes = {
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}

export default Cards;