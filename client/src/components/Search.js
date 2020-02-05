import React, { Component } from 'react';
import styled from 'styled-components';
import ResultView from './ResultView';

class Search extends Component {
    state = {
        query: "",
        search: false,
        initial: true,
        user: 1,
        data: [
            { title: "title1", user: 1, heading: "you can edit this, right? RIGHT?", content: "here is the content1" },
            { title: "title2", user: 2, heading: "this is the heading2", content: "here is the content2" },
            { title: "title3", user: 3, heading: "this is the heading3", content: "here is the content3" },
            { title: "title4", user: 1, heading: "you can edit this, right?", content: "here is the content4" },
            { title: "title5", user: 4, heading: "this is the heading5", content: "the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog" },
            { title: "title2", user: 2, heading: "this is the heading2", content: "here is the content2" },
            { title: "title3", user: 3, heading: "this is the heading3", content: "here is the content3" },
            { title: "title4", user: 1, heading: "you can edit this, right?", content: "here is the content4" },
            { title: "title5", user: 4, heading: "this is the heading5", content: "here is the content5" },
            { title: "title2", user: 2, heading: "this is the heading2", content: "here is the content2" },
            { title: "title3", user: 3, heading: "this is the heading3", content: "here is the content3" },
            { title: "title4", user: 1, heading: "you can edit this, right?", content: "here is the content4" },
            { title: "title5", user: 4, heading: "this is the heading5", content: "here is the content5" }
        ],
        results: [],
        currentView: {}
    }
    toggleSearch = () => {
        this.setState({ search: !this.state.search })
    }
    toggleView = (data) => {
        this.setState({ currentView: data })
        this.setState({ initial: false })
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    };
    checkAuth = (userID) => {
        if (userID == this.state.user) {
            return (
                "✓"
            )
        } else {
            return (
                "x"
            )
        }
    }
    render() {
        return (
            <LeftToRight>
                <Tab>
                    <SearchBar>
                        <Input1 placeholder="Search..." type="text" name="query" value={this.state.query} onChange={this.handleChange}></Input1>
                        <Button1 onClick={this.toggleSearch}>Search</Button1>
                    </SearchBar>
                    <ResultsBar>
                        {this.state.data.map(entry => {
                            return (<Result onClick={() => this.toggleView(entry)} content={entry}>{entry.title}</Result>);
                        })}
                    </ResultsBar>
                </Tab>
                {this.state.initial 
                    ? <div>Select an entry to get started!</div>
                    : <ResultView title={this.state.currentView.title} heading={this.state.currentView.heading} content={this.state.currentView.content}/>
                }
                <AuthCheck>{this.checkAuth(this.state.currentView.user)}</AuthCheck>
            </LeftToRight>
        );
    }
}
const AuthCheck = styled.div`
    align-self: flex-start;
    text-align: center;
`
const LeftToRight = styled.div`
    display: flex;
    flex-direction: row;
`
const Tab = styled.div`
    min-width: 300px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #C6C5B9;
`
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
    height: 100%;
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