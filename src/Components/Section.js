import React from 'react';
import styled from 'styled-components';

function Section(props) {
    return (
        <Container bgImg={props.bgImg}>
            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>Custom Order</LeftButton>
                <RightButton>Existing Inventory</RightButton>
            </ButtonGroup>
            <DownArrowContainer src="./images/arrow.png">
            </DownArrowContainer>
        </Container>
    )
}

export default Section

const Container = styled.div`
    background-image: ${props => `url('/images/${props.bgImg}')`};
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items:center;
`
const ItemText = styled.div`
    text-align:center;
    padding-top: 15vh;
    flex-grow:1;
`
const ButtonGroup = styled.div`
    display:flex;
    text-align: center;
    text-transform:uppercase;
    opacity: 0.75;
    margin-bottom:20px;
`
const LeftButton = styled.div`
    background-color: silver;
    border-radius: 5vh;
    height: 40px;
    width:256px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:10px;
`
const RightButton = styled(LeftButton)`
    background-color: black;
    color:White;
`
const DownArrowContainer = styled.img`
    margin-bottom:30px;
    animation: animateDown infinite 1.5s;
    height: 15px;
    width: 15px;
`