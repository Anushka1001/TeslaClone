import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Home() {
    return (
        <div>
            <Section 
                id="1"
                title = "Model X"
                description="First section."
                bgImg="try2.jpg"
            />
            <Section 
                id="2"
                title = "Model Y"
                description="Second section."
                bgImg="try4.jpg"
            />
            <Section 
                id="3"
                title = "Model Z"
                description="Third section."
                bgImg="try2.jpg"
            />
            <Section 
                id="3"
                title = "Model S"
                description="Fourth section."
                bgImg="try4.jpg"
            />
        </div>
    )
}

export default Home

const Container = styled.div`
    display: flex;
    color: #AE34Ff;
    font-weight:600;
`