import styled from 'styled-components'

export const StyledPoll = styled.div`
    background-color: white;
    width: 80vmin;
    overflow: hidden;
    display: flex;
    border: 1px solid #e2e2e2;
    border-radius: 20px;
    margin: 5% auto 0;

    p {
        margin-bottom: 2%;
        text-align: center;
    }

    img {
        border-radius: 100px;
        width: 15vmin;
        height: 15vmin;
        margin: auto 5% auto;
    }

    h4 {
        margin: 2%;
        margin-top: 5%;
        margin-left: 5%;
    }

    h6 {
        margin: 5%;
    }
`;

export const StyledPollContent = styled.div`
    display: column;
    width: 65vmin;
`;

export const StyledPollResult = styled.div`
    margin: 5%;
    width: 90%;
    border: 1px solid #e2e2e2;
    border-radius: 15px;
    overflow: hidden;
`

export const StyledChoice = styled.div`
    margin-top: 0%;
    font-weight: 600;
    background-color: lightgreen;
    text-align: center;
`;
