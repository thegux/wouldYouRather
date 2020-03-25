import styled from 'styled-components'

export const StyledPoll = styled.div`
    background-color:white;
    width:80vmin;
    border-radius:20px;
    overflow:hidden;
    display:flex;
    border: 1px solid #e2e2e2;
    margin-left:auto;
    margin-top:5%;
    margin-right:auto;

    p{
        margin-bottom:2%;
        text-align:center;
    }
    img{
        border-radius:100px;
        width:15vmin;
        height:15vmin;
        margin:5%;
        margin-top:auto;
        margin-bottom:auto;
        
    }

    h4{
        margin:2%;
        margin-top:5%;
        margin-left:5%;
    }
    h6{
        margin: 5%;
    }
`;

export const StyledPollContent = styled.div`
    display:column;
    width:65vmin;
`;

export const StyledPollResult = styled.div`
    margin-top:5%;
    width:90%;
    margin-left:5%;
    margin-right:5%;
    border: 1px solid #e2e2e2;
    border-radius:15px;
    overflow:hidden;
    margin-bottom:5%;

`

export const StyledChoice = styled.div`
    margin-top:0%;
    font-weight:600;
    background-color:lightgreen;
    text-align:center;

`;