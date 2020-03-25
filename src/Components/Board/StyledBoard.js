import styled from 'styled-components'

export const StyledBoard = styled.div`
    display:flex;
    background-color: white;
    border: 1px solid #e2e2e2;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-right:2%;
    margin-left:2%;
    border-radius:15px;

    h3, h4{
        margin-bottom:0;
    }
    
    img{
        border-radius:100px;
        width:50px;
        margin:5%;
        margin-top:auto;
        margin-bottom:auto;
        height:50px;
    }

    div{
        margin: auto;
        flex-grow: 1;
    }
`;