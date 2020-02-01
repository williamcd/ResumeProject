import React, { Component } from 'react';
import styled from 'styled-components';
import Search from './Search';

class LeftTab extends Component {

    render() {
        return (
            <div>
                <Tab>
                    <Search />
                </Tab>
            </div>
        );
    }
}
const Tab = styled.div`
    width: 300px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #C6C5B9;
`

export default LeftTab;