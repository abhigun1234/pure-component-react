import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <label>Enter Your Name</label>
                <input type="text"></input>
                <label>Enter Password</label>
                <input type="text"></input>
                
            </div>
        );
    }
}

export default Login;