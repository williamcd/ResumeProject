import React, { Component } from 'react';

class LogoutConfirm extends Component {
    render() {
        return (
            <div>
                Are you sure?
                <button onClick={this.props.confirm}>Logout</button>
                <button onClick={this.props.cancel}>Cancel</button>
            </div>
        );
    }
}

export default LogoutConfirm;