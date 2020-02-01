import React, { Component } from 'react';
import styled from 'styled-components';

class History extends Component {
    render() {
        return (
            <Main>
                <LeftToRight>
                    <HistoryList>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                        <Result>post title    | #</Result>
                    </HistoryList>
                    <ResultView>
                        <div>title</div>
                        <div>content</div>
                    </ResultView>
                </LeftToRight>
            </Main>
        );
    }
}

const Main = styled.div`
    height: 90vh;
    background-color: #FDFDFF;
`
const LeftToRight = styled.div`
    display: flex;
    flex-direction: row;
`
const HistoryList = styled.ul`
    margin-top: 0;
    list-style-type: none;
    list-style-position: outside;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #C6C5B9;
    width: 275px;
    height: 90vh;
    min-height: 400px;
    overflow: scroll;
`
const Result = styled.li`
    background-color: #C6C5B9;
    height: 40px;
    min-height: 40px;
    width: 250px;
    margin-top: 10px;
    border-radius: 2.5px;
    margin-left: -30px;
    padding-left: 10px;
    display: flex;
    align-items: center;
`
const ResultView = styled.div`
    width: 90%;
    background-color: yellow;
    height: 74.5vh;
    margin-left: 10px;
    overflow: scroll;
    padding-top: 25px;
    padding-bottom: 25px;
`


export default History;