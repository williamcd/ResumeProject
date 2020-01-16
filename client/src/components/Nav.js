import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import LogoutConfirm from './LogoutConfirm';

class Nav extends Component {
    state = {
        user: false,
        logoutRequest: false,
    }
    login = () => {
        this.setState({ user: true })
    }
    logOut = () => {
        this.setState({ user: !this.state.user })
        this.setState({ logoutRequest: false })
        console.log(this.state.user)
    }
    toggleLogout = () => {
        this.setState ({ logoutRequest: !this.state.logoutRequest })
        console.log(this.state.logoutRequest)
    }
    render() {
        return (
            <Main>
                <Title>Database Explorer</Title>
                <ButtonBar>
                    <Link to="/search"><Button1>Search</Button1></Link>
                    {this.state.user ? <Link to="/history"><Button1>History</Button1></Link> : null}
                    {this.state.user ? <Button1 onClick={this.toggleLogout}>Log Out</Button1> : <Button1 onClick={this.login}>Log In</Button1>}
                    {this.state.logoutRequest ? <LogoutConfirm confirm={this.logOut} cancel={this.toggleLogout} /> : null}
                </ButtonBar>
            </Main>
        );
    }
}
const Main = styled.nav`
    width: 100%;
    height: 10vh;;
    background-color: #393D3F;
    display: flex;
    flex-direction: row;
`
const Title = styled.div`
    font-size: 30px;
    font-weight: 600;
    align-self: center;
    margin-left: 25px;
    color: #FDFDFF;
    :hover {
    text-decoration: none;
    }
    :visited {
    text-decoration: none;
    }
    :link {
    text-decoration: none;
    }
`
const ButtonBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;
    margin-right: 10px;
    float: right;
`
const Button1 = styled.button`
    width: 100px;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: #1C7293;
    color: #393D3F;
    border: none;
    font-size: 15px;
    font-weight: bold;
    outline: none;
    &:hover {
        color: #FDFDFF;
    };
    &:active {
        background-color: #065A82;
    }
`
const Input1 = styled.input`
    width: 200px;
    height: 35px;
    border: none;
    border-radius: 5px;
    outline: none;
    padding-left: 10px;
    font-size: 20px;
    margin-right: 10px;
`

export default Nav;