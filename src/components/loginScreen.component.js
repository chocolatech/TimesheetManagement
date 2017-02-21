import React, { Component } from 'react';
import '../styles/loginScreen.css';

export default class LoginScreen extends Component {
    render() {
        return (
            <div className="panel panel-default login-panel">
                <div className="panel-heading text-center blue-background">
                    <h3 className="panel-title">Login</h3>
                </div>
                <div className="panel-body">
                    <form className="input-group well well-lg login-form">
                        <input type="text" className="form-control" placeholder="Login" autoFocus required /><br />
                        <input type="password" className="form-control" id="password" placeholder="Password" /><br />
                        <button type="submit" className="btn btn-primary" id="submit-button">Log in</button>
                    </form>
                </div>
            </div>
        )
    }
}