import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoListItem extends Component {
    render() {
        return (
            <div>
                <li>{this.props.name}</li>
            </div>
        );
    }
}

TodoListItem.proptType = {
    name: PropTypes.string.isRequired
};

export default TodoListItem;
