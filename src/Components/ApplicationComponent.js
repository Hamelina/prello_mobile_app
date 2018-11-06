import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login/Login';
import MainScreen from '../Screens/MainScreen';

class ApplicationComponent extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return <MainScreen />;
        } else {
            return <MainScreen />;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(ApplicationComponent);