import React from 'react'
import {StyledError} from './StyledError'
import {Link} from 'react-router-dom'

export default function Error(){
    return(
        <StyledError>
            <img src='https://image.flaticon.com/icons/svg/2742/2742329.svg' alt='Error'/>
            <h2>Sorry, we couldn't find this page</h2>
            <Link to='/'><h4>click here to go back</h4></Link>
        </StyledError>
    )
}