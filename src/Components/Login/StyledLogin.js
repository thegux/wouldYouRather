import styled from 'styled-components'

export const StyledLogin = styled.div`
    padding:2%;
    
`;


export const StyledLoginItem = styled.div`
    background-color: white;
    width: 40%;
    border-radius: 15px;
    text-align: center;
    border: 1px solid #e2e2e2;
    display: column;
    margin-top:5%;
    margin-left: auto;
    margin-right:auto;
    padding-bottom: 2%;

    img{
        width: 100%;
    }

    h4{
        margin-top:3%;
        margin-bottom:2%;
    }

    Dropdown{
        background-color:'blue';
    }

    Button {
        width:70vmin;
        margin-top:3%;
    }


`;

export const StyledLoginHeader = styled.div`
    text-align: center;
    border-radius: 15px;
    padding-bottom:1%;
    h6 {
        font-weight: 600;
        padding-top: 5%;
    }
    p {
        margin-top: -1%;
        font-size: 12px;
    }
`;

export const StyledLoginProfile = styled.div`
    display:flex;
    justify-content: center;

    button, a{
        width:70vmin;
    }

    .btn-secondary{
        background-color:white;
        color:#e2e2e2;
        border:1px solid #e2e2e2;
    }

    .btn-secondary.focus, .btn-secondary:focus{
        background-color:white;
        color:#e2e2e2;
        border:1px solid #e2e2e2;
        box-shadow:none;
    }
    .btn-secondary:not(:disabled):not(.disabled).active, .btn-secondary:not(:disabled):not(.disabled):active, .show>.btn-secondary.dropdown-toggle {
        color: #e2e2e2;
        background-color: #ffffff;
        border:1px solid #e2e2e2;
        box-shadow:none;
    }

    .dropdown-item {
        img{
            width:30px;
            height:30px;
            border-radius:15px;
            margin-right: 10px;
        }
    }

`;