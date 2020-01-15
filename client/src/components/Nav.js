import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <Main>
                <Title>
                    Database Explorer
                </Title>
                <ButtonBar>
                    <Link to="/search"><Button1>Search</Button1></Link>
                    <Link to="/history"><Button1>History</Button1></Link>
                    <Link to="/logout"><Button1>Log out</Button1></Link>
                </ButtonBar>
            </Main>
        );
    }
}
const Main = styled.nav`
    width: 100%;
    height: 80px;;
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