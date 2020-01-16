import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <Main>
                <InputDiv>
                    <TextLol>Login</TextLol>
                    <input placeholder="Username..."></input>
                    <input placeholder="Password..."></input>
                    <div>
                        <Link to="/searchAuth"><button>Login</button></Link>
                        <button>Cancel</button>
                    </div>
                    <Reset>Forgot username/password?</Reset>
                </InputDiv>
            </Main>
        );
    }
}

const Main = styled.div`
    height: 90vh;
    background-color: #FDFDFF;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Reset = styled.div`
    font-size: 20px;
    font-weight: 300;
    margin-top: 20%;
    color: #C6C5B9;
`
const TextLol = styled.div`
    font-size: 30px;
    font-weight: 600;
    margin-top: 20px;
    color: #FDFDFF;
`
const InputDiv = styled.div`
    width: 500px;
    height: 400px;
    background-color: #393D3F;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top: 100px;
    input {
        width: 300px;
        margin-top: 20px;
        border: 1px solid black;
        height: 35px;
        border-radius: 5px;
        outline: none;
        padding-left: 10px;
        font-size: 20px;
        margin-right: 10px;
    }
    button {
        width: 100px;
        height: 40px;
        margin-top: 20px;
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
    }
`

export default Login;