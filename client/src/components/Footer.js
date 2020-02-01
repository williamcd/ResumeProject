import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
    render() {
        return (
            <Duh>
                <div>github</div>
                <div>linkedin</div>
            </Duh>
        );
    }
}

const Duh = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: #065A82;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export default Footer;