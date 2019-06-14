// BedButton.js
import React, {Component} from 'react';
import {add} from './actions'

class AddButton extends Component {

    render() {
        return (
            <input value={'+'} type="button" onClick={this.addNumber}/>
        )
    }

    addNumber = () => {
        this.props.store.dispatch(add());
    }
}

export default AddButton;