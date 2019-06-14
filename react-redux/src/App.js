// App.js
import React, {Component} from 'react'
import {connect} from 'react-redux'
import AddButton from './AddButton'
import SubButton from './SubButton'

class App extends Component {

    render() {
        return (
            <div className="App">
                <span>{this.props.number}</span><br/>
                <AddButton/><SubButton/>
            </div>
        );
    }
}

let mapStateToProps = (state, /*ownProps*/) => {
    return {
        number: state.data.number,
    };
};

App = connect(mapStateToProps)(App);

export default App;
