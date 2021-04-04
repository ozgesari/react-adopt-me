import React from  'react';
import styled from 'styled-components';
import { ContextExclusionPlugin } from 'webpack';

import  './Person.css';

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

    const rnd = Math.random();

    if(rnd > 0.7){
        throw new Error('Something wen wrong')
    }

    return (
       <StyledDiv>
             <p onClick={props.click}>I'm {props.name} and I am { props.age } years old!</p>
             <p>{props.children}</p>  
             <input  type="text"  onChange={props.changed} value={props.name}/>
       </StyledDiv>
    )
}

export default person;