import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LogoutConfirm extends Component {
    render() {
        return (
            <div>
                Are you sure?
                <Link to="/"><button onClick={this.props.confirm}>Logout</button></Link>
                <button onClick={this.props.cancel}>Cancel</button>
            </div>
        );
    }
}

export default LogoutConfirm;