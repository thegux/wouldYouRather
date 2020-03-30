import styled from 'styled-components'

export const StyledBoard = styled.div`
    display: flex;
    background-color: white;
    border: 1px solid #e2e2e2;
    padding: 1% 0 1%;
    margin: 0 2% 3%;
    border-radius: 15px;

    h3,
    h4 {
        margin-bottom: 0;
    }

    img {
        border-radius: 100px;
        width: 50px;
        height: 50px;
        margin: auto 5% auto;
    }

    div {
        width: 100%;
        margin: auto;
        flex-grow: 1;
    }
`;
