import React, { Component } from 'react';
import styled from 'styled-components';

class ResultView extends Component {
    render() {
        return (
            <View>
                <div>
                    <Title>{this.props.title}</Title>
                    <PostControls>
                        <button>edit</button>
                        <button>delete</button>
                    </PostControls>
                </div>
                <Heading>{this.props.heading}</Heading>
                <Content>{this.props.content}</Content>
            </View>
        );
    }
}

const View = styled.div`
    display: flex;
    flex-direction: column;
    height: 85vh;
    width: 70%;
    padding-left: 20px;
    padding-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    line-height: 25px;
    overflow: scroll;
`
const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    margin-top: 20px;
    width: 100%;
    height: 50px;
    /* flex-direction: row; */
`
const Heading = styled.div`
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;
`
const Content = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
`
const PostControls = styled.div`

`

export default ResultView;