import styled from 'styled-components'

export const StyledQuestion = styled.div`
    display: column;
    overflow: hidden;
    margin: 3% auto 0;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    width: 70vmin;
    background-color: white;

    h4 {
        margin-bottom: 10%;
    }


    img {
        border-radius: 100px;
        width: 100px;
        margin: auto 5% auto;
        height: 100px;
    }

    Button {
        float: right;
        margin-bottom: 5%;
        height: 7vmin;
    }

`;

export const StyledQuestionContent = styled.div`
    display: flex;
    border-left: 1px solid #e2e2e2;
    width: 100%;
`;

export const StyledQuestionAuthor = styled.div`
    background-color: rgb(241, 241, 241);
    padding: 3%;
    padding-left: 4%;
`;

export const StyledQuestionText = styled.div`
    width: 100%;
    padding: 5%;
    padding-right: 5%;
`;
