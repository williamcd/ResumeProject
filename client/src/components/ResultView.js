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
                <Content><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sodales justo. Quisque venenatis nunc sed risus pellentesque, eget dictum arcu fringilla. Integer molestie odio eget gravida ullamcorper. Quisque id lorem a quam fermentum ultrices. Duis consequat sit amet justo at tempor. Etiam vitae urna non tellus facilisis iaculis. Duis in tortor purus. Suspendisse rutrum, tortor in euismod vulputate, sem lorem egestas ante, non efficitur orci eros et risus.</p>

<p>Vestibulum tincidunt dignissim convallis. Phasellus commodo odio a est convallis, at feugiat nibh finibus. Quisque imperdiet mi urna, sit amet hendrerit nisi elementum in. Ut risus tellus, consequat in arcu a, gravida accumsan massa. Morbi mattis erat a nulla varius luctus. Pellentesque ultricies at sem nec egestas. Duis ut nibh consectetur, imperdiet eros ac, porta odio. Praesent non gravida sem, eget luctus diam. Sed vitae sapien varius, placerat magna a, pretium ex.</p>

<p>Pellentesque viverra, leo sed laoreet rhoncus, ipsum arcu volutpat enim, nec malesuada nisl massa volutpat ex. Fusce dignissim in lectus ut vestibulum. Sed facilisis porttitor aliquet. Nunc a molestie turpis. Aliquam erat volutpat. Nunc vitae mollis urna. Sed eu elit lorem. Quisque facilisis vulputate tellus.</p>

<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis dictum vehicula pretium. Aenean at ante eu enim molestie gravida ac vel leo. Vestibulum bibendum turpis at justo posuere laoreet. In interdum fringilla rhoncus. Maecenas lobortis sodales eros, et accumsan risus posuere vulputate. Nam aliquam massa quis odio aliquet, nec mollis nisi aliquam. Duis nunc metus, tincidunt placerat euismod ac, convallis vitae eros.</p>

<p>Aliquam at hendrerit turpis. Etiam rhoncus, nulla eget placerat scelerisque, mauris nibh semper eros, non blandit risus sapien vitae eros. Morbi ut lectus quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras at dui pretium, ultricies tortor vel, malesuada eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras varius rhoncus metus, ac laoreet sem ornare id. Donec cursus est ante, in ornare orci rhoncus sit amet. Fusce posuere lectus eu turpis convallis semper quis in lacus. Ut eleifend elit urna, eget ornare felis euismod in. Vestibulum ac ante vestibulum, luctus diam sed, consectetur sapien. Curabitur ullamcorper, magna sed pharetra pellentesque, diam orci euismod ligula, luctus euismod elit ligula quis eros. Ut rhoncus tortor neque, quis pharetra ligula ultrices eu. Sed lorem ligula, faucibus non mi sed, pharetra vestibulum nisi. Sed convallis tempus lacus, eget egestas leo dapibus eget.</p></Content>
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
    font-family:Georgia, Times, serif; font-size:1.6em; line-height:2.8em; margin:0;
    .indented {text-indent: 3em;}
`

// p {font-family:Georgia, Times, serif; font-size:1.6em; line-height:2.2em; margin:0;}

// .indented {text-indent: 3em;}

const Content = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
    text-indent: 3em;
`
const PostControls = styled.div`

`

export default ResultView;