// AddButton.js
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add} from './actions'

class AddButton extends Component {

    render() {
        return (
            <input value={'+'} type="button" onClick={this.props.addNumber}/>
        )
    }
}

let mapDispatchToProps = (dispatch, /*ownProps*/) => {
    return {
        addNumber: () => dispatch(add())
    };
};

AddButton = connect(null, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => {
    return {
        addNumber: () => dispatchProps.addNumber()
    };
})(AddButton);

export default AddButton;