// SubButton.js
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sub} from './actions'

class SubButton extends Component {

    render() {
        return (
            <input value={'-'} type="button" onClick={this.props.subNumber}/>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        subNumber: () => dispatch(sub())
    };
};

SubButton = connect(null, mapDispatchToProps)(SubButton);

export default SubButton;