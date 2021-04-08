import React from 'react';
import styled from 'styled-components';


import './Person.css';

const StyledDiv = styled.div`
width: 60%;
margin: auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align:center; 
'@media (min-width: 500px)' : {
    width:'450px'
}
`

const person = (props) => {
    // min-width : equal or greater than
    // max-width : between 0 and 500px

    return (
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>

            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

export default person;