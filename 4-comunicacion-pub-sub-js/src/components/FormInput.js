import React, { Component } from 'react';
import PubSub from 'pubsub-js';

class FormInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    componentWillMount(){
        this.globalEvent = PubSub.subscribe('GLOBAL_EVENT', (topic, value) => {
            console.log(topic, value);
            this.setState({inputValue: value});
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.globalEvent);
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.inputValue}
                    onChange={(e) => { this.setState({inputValue: e.target.value}) }}
                />
            </div>
        );
    }
}

export default FormInput;