import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

class Info extends Component {
    render() {
        return (
            <Main>
                <div>
                    <Title>Backpack</Title>
                    <Slogan>The database explorer</Slogan>
                </div>
                <div>
                    <Description>
                        Here's a much longer description with login/signup buttons below and a fancy link to the github repo that looks really nice hopefully lol haha hehe
                    </Description>
                    <Links>
                        <Link to="/login"><Button1>Login</Button1></Link>
                        <Link to="/signup"><Button1>Signup</Button1></Link>
                        <Link><Button1>Github</Button1></Link>
                        <Link><Button1>Linkedin</Button1></Link>
                    </Links>
                </div>
            </Main>
        );
    }
}

const Main = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Links = styled.div`
    width: 400px;
    margin-top: 40px;
    margin-left: 100px;
    display: flex;
    flex-direction: row;
`
const Button1 = styled.button`
    width: 100px;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    background-color: #1C7293;
    color: #FDFDFF;
    border: none;
    font-size: 15px;
    font-weight: bold;
    outline: none;
    &:hover {
        color: #C6C5B9;
    };
    &:active {
        background-color: #065A82;
    }
`
const Description = styled.div`
    margin-left: 100px;
    width: 500px;
`
const Title = styled.div`
    margin-left: 200px;
    width: 200px;
    font-size: 50px;
    font-weight: 600;
`
const Slogan = styled.div`
    margin-left: 200px;
`

export default Info;