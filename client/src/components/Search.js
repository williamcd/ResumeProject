import React, { Component } from 'react';
import styled from 'styled-components';

class Search extends Component {
    render() {
        return (
            <div>
                <LeftTab>
                    <SearchBar>
                        <Input1 placeholder="Search..."></Input1>
                        <Button1>Search</Button1>
                    </SearchBar>
                </LeftTab>
            </div>
        );
    }
}
const LeftTab = styled.div`
    width: 300px;
    background-color: yellow;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`
const SearchBar = styled.div`
    width: 100%;
    margin-top: 15px;
    margin-left: 9.5px;
`
const Button1 = styled.button`
width: 70px;
height: 40px;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
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
    height: 38px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    outline: none;
    padding-left: 10px;
    font-size: 20px;
`

export default Search;