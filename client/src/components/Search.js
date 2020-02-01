import React, { Component } from 'react';
import styled from 'styled-components';

class Search extends Component {
    state = {
        query: "",
        search: false,
        data: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"],
        results: [],
    }
    toggleSearch = () => {
        this.setState({ search: !this.state.search })
        console.log(this.state)
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        console.log(this.state.query)
    };
    render() {
        return (
            <div>
                <SearchBar>
                    <Input1 placeholder="Search..." type="text" name="query" value={this.state.query} onChange={this.handleChange}></Input1>
                    <Button1 onClick={this.toggleSearch}>Search</Button1>
                </SearchBar>
                <ResultsBar>
                    <Result>{this.state.query}</Result>
                    {this.state.data.map(entry=> {
                        return (<Result>{entry}</Result>);
                    })}
                </ResultsBar>
            </div>
        );
    }
}
const Result = styled.li`
    font-weight: 500;
    font-size: 15px;
    list-style-type: none;
    width: 85%;
    height: 50px;
    min-height: 50px;
    background-color: #C6C5B9;
    margin-top: 10px;
    border-radius: 5px;
    align-items: center;
    display: flex;
    padding-left: 20px;
`
const ResultsBar = styled.div`
    width: 281px;
    margin-left: 9px;
    margin-bottom: 9px;
    border-radius: 5px;
    height: 69%;
    margin-top: 15px;
    background-color: #FDFDFF;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: scroll;
    padding-bottom: 10px;
`
const SearchBar = styled.div`
    width: 100%;
    margin-top: 15px;
    margin-left: 9px;
    display: flex;
    align-items: center;
`
const Button1 = styled.button`
    width: 70px;
    height: 40px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #2E86AB;
    color: #FDFDFF;
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